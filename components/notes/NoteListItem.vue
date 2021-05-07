<template>
  <div class="item" :class="'type-' + note.type">
    <div class="item__header">
      <button class="item__header__btn delete" @click="deleteNote">
        &nbsp;
      </button>
      <button class="item__header__btn edit" @click="updateNote">
        &nbsp;
      </button>
    </div>
    <pre class="item__body">{{ note.string }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Note } from '~/types/Note'

@Component
export default class extends Vue {
  @Prop() note!: Note

  deleteNote () {
    this.$axios.$delete('/api/note/' + this.note.id).then(() => {
      this.$eventBus.$emit('DeleteNote', this.note.id)
    })
  }

  updateNote () {
    this.$eventBus.$emit('UpdateNote', this.note)
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  //box-shadow: 0 0 5px 0 rgba(0, 0, 0, .3);

  &__header {
    display: flex;
    flex-direction: row-reverse;

    &__btn {
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 20px;
      border: none;
      margin-right: 8px;
      width: 28px; height: 34px;

      &.delete {
        background-image: url(~@/assets/img/btns/delete-white.svg);
      }

      &.edit {
        background-image: url(~@/assets/img/btns/edit-white.svg);
      }
    }
  }

  &__body {
    font-family: "Roboto Slab", sans-serif;
    background-color: white;
    flex-grow: 1;
    padding: 8px;
    font-size: 14px;
    margin: 0;
    border: 1px solid rgba(0, 0, 0, .3);
    border-top: none;
  }

  &.type-1 {
    .item__header {
      background-color: #fe982a;
    }
  }

  &.type-0 {
    .item__header {
      background-color: #216a61;
    }
  }
}
</style>
