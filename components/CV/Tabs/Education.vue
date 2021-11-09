<template>
  <Timeline>
    <TimelineItem>
      <template #title>Веб-разработка (Программная инженерия)</template>
      <template #subtitle>2021 - н.в, ИТМО, Санкт-Петербург</template>
      <template #default></template>
    </TimelineItem>

    <TimelineItem>
      <template #title>
        Мобильные и сетевые технологии (Прикладная информатика)
      </template>
      <template #subtitle>2020 - 2021, ИТМО, Санкт-Петербург</template>
      <template #default>Переведен на специальность "Веб-разработка"</template>
    </TimelineItem>

    <TimelineItem>
      <template #title>
        Автоматизация бизнес-процессов (Прикладная информатика)
      </template>
      <template #subtitle>2016 - 2020, ВГУЭС, Владивосток</template>
      <template #default>
        <!-- Красный диплом. ВКР: "Разработка мобильного приложения «Личный
                  кабинет студента» на основе веб-технологий" -->
      </template>
    </TimelineItem>
  </Timeline>
</template>

<script>
export default {
  components: {
    Timeline: () => import('~/components/CV/Timeline'),
    TimelineItem: () => import('~/components/CV/TimelineItem'),
  },
}
</script>
