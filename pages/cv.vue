<template>
  <Page :breadcrumbs="breadcrumbs" class="cv-page">
    <!-- <template #actions>
      <NuxtLink to="/" class="btn btn-interface">
        {{ $t('pages.cv.actions.print') }}
      </NuxtLink>
    </template> -->
    <hr />
    <div class="row pt-5">
      <div class="col-12 col-md-3 col-xl-2 d-flex justify-content-center">
        <div class="avatar cv-page__avatar">
          <img
            src="/static/images/avatar2.webp"
            alt="Photo"
            draggable="false"
          />
        </div>
      </div>
      <div
        class="col-12 col-md-9 col-xl-10 d-flex flex-column justify-content-center align-items-center align-items-md-start mt-4 mt-md-0"
      >
        <div
          class="d-flex align-items-center cv-page__title flex-column flex-md-row"
        >
          <h2 class="text-center text-md-start">{{ $t('name') }}</h2>
          <span class="d-print-none">
            <a
              v-b-tooltip
              href="https://github.com/ErriourMe"
              target="_blank"
              title="GitHub"
            >
              <SvgIcon name="github" />
            </a>
            <a
              v-b-tooltip
              href="https://ru.stackoverflow.com/users/300171"
              target="_blank"
              title="🇷🇺 StackOverfow"
            >
              <SvgIcon name="stackoverflow" />
            </a>
          </span>
        </div>
        <div class="cv-page__role text-center text-md-start mt-3 mt-md-0">
          <p>{{ $t('pages.cv.role') }}</p>
        </div>
        <div
          class="cv-page__contacts flex-column flex-md-row text-center text-md-start mt-3 mt-md-0"
        >
          {{ $t('pages.cv.contacts.title') }}:
          <span class="mt-2 mt-md-0">
            <a class="cv-page__contact" href="mailto:erriour.me@gmail.com">
              {{ $t('pages.cv.contacts.email') }}
            </a>
            <a
              v-b-tooltip
              class="cv-page__contact"
              href="https://t.me/erriour"
              :title="$t('pages.cv.contacts.primary')"
            >
              {{ $t('pages.cv.contacts.telegram') }}
            </a>
            <a
              v-b-tooltip
              class="cv-page__contact"
              href="https://vk.me/erriour"
            >
              {{ $t('pages.cv.contacts.vk') }}
            </a>
          </span>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-12 col-xl-3">
        <div class="position-sticky" style="top: 20px">
          <div class="cv-page__sidebar-block">
            <h3 class="d-flex align-items-center">
              {{ $t('pages.cv.titles.skills') }}
              <!-- <span class="help-icon">?</span> -->
            </h3>
            <div
              v-for="(category, i) in skills"
              :key="`skills-category-${i}-title`"
            >
              <div class="help cv-page__sidebar-help">{{ category.title }}</div>
              <div>
                <a
                  v-for="(tag, j) in category.skills"
                  :key="`skills-category-${i}-tag-${j}`"
                  v-b-tooltip
                  :title="tag.description"
                  href="#"
                  :class="`badge badge-pill badge-${tag.color}`"
                >
                  {{ tag.title }}
                  <span v-if="tag.description" class="help-icon">?</span>
                </a>
              </div>
            </div>

            <div class="cv-page__sidebar-block mt-4">
              <h3 class="d-flex align-items-center">
                {{ $t('pages.cv.titles.languages') }}
              </h3>
              <div>
                <ul>
                  <li v-for="(lang, i) in langs" :key="`langs-${i}`">
                    {{ lang.title }}
                    <span
                      v-if="lang.description"
                      v-b-tooltip
                      :title="lang.description"
                      class="help-icon"
                    >
                      ?
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-9 mt-5 mt-xl-0">
        <h3>{{ $t('pages.cv.titles.about') }}</h3>
        <div v-html="cv.about"></div>

        <b-tabs class="mt-5 d-print-none">
          <b-tab :title="$t('pages.cv.titles.work')">
            <Work />
          </b-tab>
          <b-tab :title="$t('pages.cv.titles.education')">
            <Education />
          </b-tab>
          <b-tab
            v-if="$i18n.locale === 'ru'"
            :title="$t('pages.cv.titles.freelance')"
          >
            <Freelance />
          </b-tab>
        </b-tabs>

        <div class="d-none d-print-block mt-4">
          <h2>{{ $t('pages.cv.titles.work') }}</h2>
          <Work />

          <hr class="my-4" />

          <h2>{{ $t('pages.cv.titles.education') }}</h2>
          <Education />

          <template v-if="$i18n.locale === 'ru'">
            <hr class="my-4" />

            <h2>{{ $t('pages.cv.titles.freelance') }}</h2>
            <Freelance />
          </template>
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import ruSkills from '~/data/ru/skills'
import enSkills from '~/data/en/skills'

import ruLangs from '~/data/ru/langs'
import enLangs from '~/data/en/langs'

import ruCV from '~/data/ru/cv'
import enCV from '~/data/en/cv'

export default {
  components: {
    Page: () => import('~/components/Page'),
    Work: () => import('~/components/CV/Tabs/Work'),
    Education: () => import('~/components/CV/Tabs/Education'),
    Freelance: () => import('~/components/CV/Tabs/Freelance'),
  },
  data() {
    return {
      cv: this.$i18n.locale === 'ru' ? ruCV : enCV,
      skills: this.$i18n.locale === 'ru' ? ruSkills : enSkills,
      langs: this.$i18n.locale === 'ru' ? ruLangs : enLangs,
      breadcrumbs: [
        {
          text: this.$t('pages.index.title'),
          href: '/',
        },
        {
          text: this.$t('pages.cv.title'),
          active: true,
        },
      ],
    }
  },
  computed: {
    currentLocale() {
      return {
        code: this.$i18n.locale,
        name: this.$i18n.locales.filter((obj) => {
          return obj.code === this.$i18n.locale
        })[0].name,
      }
    },
  },
  head() {
    return {
      title: this.$t('pages.cv.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.cv.meta.description'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.cv-page {
  &__avatar {
    width: 120px;
    height: 120px;
  }

  &__title {
    a {
      width: 20px;
      height: 20px;
      margin-bottom: 0.5rem;
      margin-left: 0.8rem;
      transition: 0.2s ease;
      display: inline-block;

      &:hover {
        opacity: 0.5;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__contact {
    display: inline-flex;
    align-items: center;
    text-decoration: underline;

    &:first-child {
      margin-left: 11px;
    }

    & + & {
      margin-left: 15px;

      &:before {
        display: block;
        content: '';
        width: 15px;
        height: 4px;
        border-radius: 3px;
        background: #d2d2d2;
        margin-right: 15px;
      }
    }
  }

  &__contacts {
    display: inline-flex;
    align-items: center;
  }

  &__sidebar {
    &-help {
      margin-bottom: 8px;
    }
  }
}
</style>
