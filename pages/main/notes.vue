<template>
  <div class="notes">
    <note-list :notes="notes" />
    <add-note :type="1" class="cost" @submit="addNew" />
    <add-note :type="0" class="profit" @submit="addNew" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import NoteList from '~/components/notes/NoteList.vue'
import AddNote from '~/components/notes/AddNote.vue'
import { Note } from '~/types/Note'

@Component({
  components: { AddNote, NoteList }
})
export default class extends Vue {
  notes: Note[] = []

  async fetch () {
    this.notes = await this.$axios.$get('/api/note')
  }

  addNew (note: Note) {
    const index = this.notes.findIndex((item: Note) => item.id === note.id)

    if (index > -1) {
      this.notes.splice(index, 1, note)
    } else {
      this.notes.push(note)
    }
  }

  mounted () {
    this.$eventBus.$on('DeleteNote', (id: number) => {
      const index = this.notes.findIndex((item: Note) => item.id === id)

      if (index > -1) {
        this.notes.splice(index, 1)
      }
    })
  }
}
</script>

<style scoped>
.notes {
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 15px;
}
</style>
