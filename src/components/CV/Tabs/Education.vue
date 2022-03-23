<template>
  <Timeline>
    <TimelineItem
      v-for="(education, i) in educations"
      :key="`cv-education-${i}`"
    >
      <template #title>{{ education.title }}</template>
      <template #subtitle>
        {{ education.dates }}, {{ education.university }},
        {{ education.place }}
      </template>
      <template #default>
        {{ education.description }}
      </template>
    </TimelineItem>
  </Timeline>
</template>

<script>
import ruEdu from '~/data/ru/edu'
import enEdu from '~/data/en/edu'

export default {
  components: {
    Timeline: () => import('~/components/CV/Timeline'),
    TimelineItem: () => import('~/components/CV/TimelineItem'),
  },
  data() {
    return {
      educations: this.$i18n.locale === 'ru' ? ruEdu : enEdu,
    }
  },
}
</script>
