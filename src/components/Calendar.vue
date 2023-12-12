<template>
  <FullCalendar
    v-if="getCurrentMoonCalendar?.new_moon.current.timestamp"
    :options="calendarOptions"
  />
</template>

<script lang="ts" setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useMoonPhaseStore } from '../store/index.js'
import { storeToRefs } from 'pinia'
import moment from 'moment'
import { CalendarOptions } from '@fullcalendar/core/index.js'
import { j as EventSourceInput } from '../../node_modules/@fullcalendar/core/internal-common.js'

const moonStore = useMoonPhaseStore()
const { getCurrentMoonCalendar } = storeToRefs(moonStore)


const events = [
{
    id: 1,
    title: 'new moon : now is a time of slow growth so 🪒 but not ✂️ (except for bangs!)',
    start: moment
      .unix(getCurrentMoonCalendar?.value?.new_moon?.current?.timestamp || 0)
      .format('YYYY-MM-DD'),
      end:moment
      .unix(
        getCurrentMoonCalendar?.value?.first_quarter?.next?.timestamp || 0
      )
      .format('YYYY-MM-DD')
  },
{
    id: 2,
    title: 'new moon : now is a time of slow growth so 🪒 but not ✂️ (except for bangs!)',
    start: moment
      .unix(getCurrentMoonCalendar?.value?.new_moon?.next?.timestamp || 0)
      .format('YYYY-MM-DD'),
     
  },
  {
    id: 3,
    title: 'first quarter : starting day 2 of this phase, you can ✂️ but not 🪒',
    start: moment
      .unix(
        getCurrentMoonCalendar?.value?.first_quarter?.current?.timestamp || 0
      )
      .format('YYYY-MM-DD'),
      end:moment
      .unix(getCurrentMoonCalendar?.value?.full_moon?.current?.timestamp || 0)
      .format('YYYY-MM-DD')
  }, 
  {
    id: 4,
    title: 'first quarter : starting day 2 of this phase, you can ✂️ but not 🪒',
    start: moment
      .unix(
        getCurrentMoonCalendar?.value?.first_quarter?.next?.timestamp || 0
      )
      .format('YYYY-MM-DD'),
      end:moment
      .unix(getCurrentMoonCalendar?.value?.full_moon?.next?.timestamp || 0)
      .format('YYYY-MM-DD')
  }, 
  {
    id: 5,
    title: 'full moon : on D-day, treat your hair with a good mask ! Then starting day 2 will be a good time to cut your bangs or shave body hair, it will slow the growth',
    start: moment
      .unix(getCurrentMoonCalendar?.value?.full_moon?.current?.timestamp || 0)
      .format('YYYY-MM-DD'),
      end: moment
      .unix(
        getCurrentMoonCalendar?.value?.last_quarter?.current?.timestamp || 0
      )
      .format('YYYY-MM-DD')
  },
  {
    id: 5,
    title: 'full moon : on D-day, treat your hair with a good mask ! Then starting day 2 will be a good time to cut your bangs or shave body hair, it will slow the growth',
    start: moment
      .unix(getCurrentMoonCalendar?.value?.full_moon?.next?.timestamp || 0)
      .format('YYYY-MM-DD'),
      end: moment
      .unix(
        getCurrentMoonCalendar?.value?.last_quarter?.next?.timestamp || 0
      )
      .format('YYYY-MM-DD')
  },
 
  {
    id: 7,
    title: 'last quarter : good time to cut your bangs or shave body hair, it will slow the growth',
    start: moment
      .unix(
        getCurrentMoonCalendar?.value?.last_quarter?.current?.timestamp || 0
      )
      .format('YYYY-MM-DD'),
    end:  moment
      .unix(getCurrentMoonCalendar?.value?.new_moon?.current?.timestamp || 0)
      .format('YYYY-MM-DD'),
  },
  {
    id: 8,
    title: 'last quarter : good time to cut your bangs or shave body hair, it will slow the growth',
    start: moment
      .unix(
        getCurrentMoonCalendar?.value?.last_quarter?.next?.timestamp || 0
      )
      .format('YYYY-MM-DD'),
    end:  moment
      .unix(getCurrentMoonCalendar?.value?.new_moon?.next?.timestamp || 0)
      .format('YYYY-MM-DD'),
  },
  
]

const calendarOptions : CalendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin],
  initialView: 'dayGridMonth',
  events: events as EventSourceInput,
  eventColor: '#4B0082'
}

</script>

<style lang="css">
.fc {
  color: white !important;
}

.fc-button-group{
  display: none !important;
}

.fc-today-button{
  display: none !important;
}
</style>
