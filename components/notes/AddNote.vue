<template>
  <form class="window" @submit.prevent="submit">
    <div class="window__header">
      Заметки
    </div>
    <div class="window__body">
      <div class="row">
        <div class="col-12">
          <div class="input-group" :class="{'error': $v.note.$error}">
            <textarea
              v-model="$v.note.$model"
              class="field"
              placeholder="Напишите заметку"
              @input="$v.note.$reset"
            />
          </div>
        </div>
      </div>
      <div class="window__body__actions">
        <button type="button" class="action-btn btn-cancel" @click="reset">
          Отмена
        </button>
        <button type="submit" class="action-btn btn-save">
          Сохранить
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { required } from 'vuelidate/lib/validators'
import { Note } from '~/types/Note'

@Component
export default class extends Vue {
  @Prop() type!: number

  id: number | null = null
  note: string = ''

  reset () {
    // @ts-ignore
    Object.assign(this.$data, this.$options.data.apply(this))
    setTimeout(this.$v.$reset, 0)
  }

  mounted () {
    this.$eventBus.$on('UpdateNote', (note: Note) => {
      if (note.type === this.type) {
        this.id = note.id
        this.note = note.string
      }
    })
  }

  async submit () {
    this.$v.$touch()

    if (this.$v.$error) {
      return
    }

    const data = {
      type: this.type,
      string: this.note
    }

    let note
    if (this.id) {
      note = await this.$axios.$put('/api/note/' + this.id, data)
    } else {
      note = await this.$axios.$post('/api/note', data)
    }

    this.$emit('submit', note)
    this.reset()
  }

  validations () {
    return {
      note: {
        required
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.window {
  background-color: white;
  display: flex;
  flex-direction: column;

  &.cost {
    grid-column: 3/4;
    grid-row: 1/2;

    .window__header {
      background-color: #fe982a;
    }

    .btn-save {
      background-color: #fe982a;
    }
  }

  &.profit {
    grid-column: 3/4;
    grid-row: 2/3;

    .window__header {
      background-color: #216a61;
    }

    .btn-save {
      background-color: #216a61;
    }
  }

  &__header {
    font-size: 14px;
    font-weight: bold;
    line-height: 12px;
    padding: 20px 0 21px 25px;
    text-transform: uppercase;
    color: white;
  }

  &__body {
    padding: 35px 25px;
    position: relative;
    flex-grow: 1;
    border: 1px solid rgba(0, 0, 0, .3);
    border-top: none;

    .row {
      height: 100%;
      padding-bottom: 50px;
    }

    .input-group {
      height: 100%;
    }

    &__actions {
      position: absolute;
      bottom: 35px; right: 25px;
      width: auto;
      display: flex;

      .action-btn {
        font-size: 10px;
        line-height: 7px;
        color: rgba(0, 0, 0, .7);
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 3px;
        padding: 9px 16px;
        font-weight: bold;
        background-color: white;
      }

      .btn-save {
        color: white;
        border-color: transparent;
      }

      .action-btn + .action-btn {
        margin-left: 12px;
      }
    }
  }
}

.field {
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 3px;
  background-color: white;
  padding: 16px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, .7);
  height: 100%;
  resize: none;
}
</style>
