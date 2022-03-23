<template>
  <div class="lang-select">
    <b-dropdown
      size="lg"
      variant="link"
      right
      menu-class="animate__animated animate__fadeIn animate__faster"
      toggle-class="mx-2 outline-none p-0 text-decoration-none lang-select__button"
      no-caret
    >
      <template #button-content>
        <span class="d-flex align-items-center">
          <span class="mr-2 lang-select__flag">
            <SvgIcon :name="currentLocale.code" />
          </span>
          <span class="lang-select__title">
            {{ currentLocale.name }}
          </span>
          <span class="lang-select__arrow">
            <SvgIcon name="arrow" />
          </span>
        </span>
      </template>
      <b-dropdown-item
        v-for="locale in availableLocales"
        :key="locale.code"
        link-class="lang-select__link"
        :to="switchLocalePath(locale.code)"
      >
        <SvgIcon class="lang-select__link-flag mr-1" :name="locale.code" />
        <span class="ml-2">
          {{ locale.name }}
        </span>
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales // .filter((i) => i.code !== this.$i18n.locale)
    },
    currentLocale() {
      return {
        code: this.$i18n.locale,
        name: this.$i18n.locales.filter((obj) => {
          return obj.code === this.$i18n.locale
        })[0].name,
      }
    },
  },
}
</script>

<style lang="scss">
.lang-select {
  position: absolute;
  top: 17px;
  right: 10px;

  &__flag {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__arrow {
    width: 20px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }

  &__button {
    font-size: 11pt;
    text-transform: initial;
    background: #1f1f1f;
    padding: 6px 12px !important;
    border-radius: 8px;
  }

  &__link {
    display: flex;
    align-items: center;
    font-size: 11pt;

    &-flag {
      width: 16px;
      height: 16px;
      margin-bottom: -1px;
    }
  }
}
</style>
