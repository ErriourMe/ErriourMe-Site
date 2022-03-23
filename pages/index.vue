<template>
  <div
    class="main-page d-flex flex-column align-items-center justify-content-center"
  >
    <div class="avatar main-page__avatar">
      <img src="/static/images/avatar.webp" alt="Erriour's avatar" />
    </div>
    <div class="main-page__name">{{ $t('name') }}</div>
    <div class="main-page__status">
      Web dev (PHP, JS, Laravel, Vue/Nuxt), UI/UX
    </div>
    <div class="main-page__socials">
      <a
        v-b-tooltip
        :title="`${$t('parts.im_in')} Telegram`"
        href="https://t.me/erriour"
        target="_blank"
      >
        <SvgIcon name="telegram" />
      </a>
      <a
        v-b-tooltip
        :title="`${$t('parts.im_in')} Github`"
        href="https://github.com/ErriourMe"
        target="_blank"
      >
        <SvgIcon name="github" />
      </a>
      <!-- <a
        :title="`${$t('parts.im_in')} Instagram`"
        href="https://instagram.com/erriour_ru"
        target="_blank"
      >
        <SvgIcon name="instagram" />
      </a> -->
      <a
        v-b-tooltip
        :title="`${$t('parts.im_in')} StackOverflow`"
        href="https://ru.stackoverflow.com/users/300171"
        target="_blank"
      >
        <SvgIcon name="stackoverflow" />
      </a>
      <a
        v-b-tooltip
        :title="`${$t('parts.im_in')} LinkedIn`"
        href="https://www.linkedin.com/in/vladimir-gonchar-433627161/"
        target="_blank"
      >
        <SvgIcon name="linkedin" class="linkedin-icon" />
      </a>
      <a
        v-b-tooltip
        :title="`${$t('parts.im_in')} Behance`"
        href="https://www.behance.net/erriour"
        target="_blank"
      >
        <SvgIcon name="behance" />
      </a>
      <a
        v-b-tooltip
        :title="`${$t('parts.im_in')} VK`"
        href="https://vk.com/erriour"
        target="_blank"
      >
        <SvgIcon name="vk" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pages.index.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.index.meta.description'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.main-page {
  height: 100vh;

  &__avatar {
    margin: 2rem;
  }

  &__name {
    font-size: 2rem;
  }

  &__status {
    margin-top: -2px;
    color: #a8a6a0;
    font-weight: bold;
    font-variant: all-small-caps;
    font-size: 1.1rem;
  }

  &__socials {
    display: flex;
    margin-top: 10px;

    svg {
      width: 20px;
      height: 20px;

      &.linkedin-icon {
        height: 17px;
      }
    }

    a {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      padding: 5px;
      background: #f5f5f5;
      border-radius: 13px;
      box-shadow: 0 0 60px rgba(58, 48, 31, 0.15);
      color: #0095ff;
      transition: 0.2s ease;

      &:hover {
        background: #0094fe;
        color: #fff;
      }
    }
  }
}
</style>
