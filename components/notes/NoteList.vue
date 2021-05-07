<template>
  <div class="component">
    <div class="component__header">
      <div class="component__header__search">
        <input v-model="search" type="text" placeholder="Поиск">
      </div>
    </div>
    <div class="component__body">
      <note-list-item v-for="note in filter" :key="note.id" :note="note" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Note } from '~/types/Note'
import NoteListItem from '~/components/notes/NoteListItem.vue'

@Component({
  components: { NoteListItem }
})
export default class extends Vue {
  @Prop() notes!: Note[]

  search: string = ''

  get filter () {
    return this.notes.filter((item: Note) => item.string.includes(this.search))
  }
}
</script>

<style lang="scss" scoped>
.component {
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
  grid-row: 1/3;

  &__header {
    display: flex;
    justify-content: space-between;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, .3);

    &__search {
      margin: 9px;

      input {
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, .2);
        height: 34px; width: 200px;
        font-family: "Roboto Slab", sans-serif;
        font-size: 10px;
        padding: 0 34px 0 8px;
        background: white url(~@/assets/img/fields/search.png) no-repeat center right 8px/18px;
        outline: none;
      }
    }
  }

  &__body {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 8px;
    margin-top: 8px;
  }
}
</style>
