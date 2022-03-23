<template>
  <Timeline>
    <TimelineItem v-for="(work, i) in works" :key="`cv-work-${i}`">
      <template #title>{{ work.title }}</template>
      <template #subtitle>
        {{ work.dates }}<template v-if="work.type">, {{ work.type }}</template>
        <template v-if="work.place">({{ work.place }})</template>
      </template>
      <template #default>
        {{ work.description }}
        <div v-if="work.references" class="mt-3">
          <a
            v-for="(ref, j) in work.references"
            :key="`cv-work-${i}-link-${j}`"
            :href="ref.link"
            class="btn btn-interface btn-sm"
            target="_blank"
            rel="nofollow noopener"
          >
            {{ ref.title }}
          </a>
        </div>
      </template>
    </TimelineItem>
  </Timeline>
</template>

<script>
import ruWork from '~/data/ru/work'
import enWork from '~/data/en/work'

export default {
  components: {
    Timeline: () => import('~/components/CV/Timeline'),
    TimelineItem: () => import('~/components/CV/TimelineItem'),
  },
  data() {
    return {
      works: this.$i18n.locale === 'ru' ? ruWork : enWork,
    }
  },
}
</script>
