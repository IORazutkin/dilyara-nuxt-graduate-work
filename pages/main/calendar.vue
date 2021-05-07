<template>
  <div class="calendar">
    <user-calendar :marks="markList" @update="$fetch" />
    <event-window @submit="$fetch" />
    <add-event-window @submit="$fetch" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import UserCalendar from '~/components/calendar/Calendar.vue'
import EventWindow from '~/components/calendar/EventWindow.vue'
import AddEventWindow from '~/components/calendar/AddEventWindow.vue'
import { Mark } from '~/types/Mark'

@Component({
  components: {
    UserCalendar,
    EventWindow,
    AddEventWindow
  }
})
export default class extends Vue {
  markList: Mark[] = []

  async fetch () {
    const params = {
      index: parseInt(this.$route.query.index as string || '0')
    }

    this.markList = await this.$axios.$get('/api/mark?' + require('qs').stringify(params))
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 15px;
}
</style>
