<template>
  <div class="calendar">
    <user-calendar />
    <event-window />
    <add-event-window />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import UserCalendar from '~/components/calendar/Calendar.vue'
import EventWindow from '~/components/calendar/EventWindow.vue'
import AddEventWindow from '~/components/calendar/AddEventWindow.vue'

@Component({
  components: {
    UserCalendar,
    EventWindow,
    AddEventWindow
  }
})
export default class extends Vue {
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
