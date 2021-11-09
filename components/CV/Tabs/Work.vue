<template>
  <Timeline>
    <TimelineItem>
      <template #title>Fullstack веб-разработчик (Modern Citi Group)</template>
      <template #subtitle>
        Январь 2021 - н.в, удаленная работа (NY, USA)
      </template>
      <template #default>
        Создание информационной инфраструктуры и системы для строительного
        бизнеса. Преимущественно разработка CRM. Создание новой версии для
        основного сайта (включая редизайн).
        <div class="mt-3">
          <a
            href="https://moderncitigroup.com"
            class="btn btn-interface btn-sm"
            target="_blank"
            rel="nofollow noopener"
          >
            moderncitigroup.com
          </a>
        </div>
      </template>
    </TimelineItem>

    <TimelineItem>
      <template #title>Фриланс</template>
      <template #subtitle> июль 2018 - декабрь 2020 </template>
      <template #default>
        В основном, разработка веб-приложений: PHP как основной язык
        программирования, Laravel как API + Vue.js/Nuxt.js как клиентское
        приложение (с использованием Bootstrap). Развитие навыков веб-дизайна
        (переход в Figma). Верстка как отдельная задача - неосновная (Webpack +
        LoDash + SCSS).
      </template>
    </TimelineItem>

    <TimelineItem>
      <template #title>Специалист (ВГУЭС)</template>
      <template #subtitle>
        Январь 2019 - август 2020, офис (Владивосток, РФ)
      </template>
      <template #default>
        Разработка и поддержка сервисов университета (от дизайна до релиза),
        верстка шаблонов, работа с сайтами (сборка через внутренний конструктор
        с частичным написанием кода). Figma/Photoshop, PHP, Smarty, CSS, HTML,
        Bootstrap3/4, SQL. Опыт работы с Yii2, MsSQL.
      </template>
    </TimelineItem>

    <TimelineItem>
      <template #title>Фриланс</template>
      <template #subtitle> Январь 2015 — июнь 2018 </template>
      <template #default>
        Преимущественно дизайн (Photoshop) и верстка (HTML, CSS/LESS, jQuery,
        Bootstrap)
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
