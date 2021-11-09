<template>
  <div class="page p-5">
    <div class="container">
      <div class="page__header">
        <b-breadcrumb
          class="
            header__breadcrumbs
            justify-content-center justify-content-md-start
          "
          :items="breadcrumbs"
        />
        <div class="row">
          <div class="col-12 col-md-8 text-center text-md-left">
            <h1>{{ title }}</h1>
          </div>
          <div
            class="
              col-12 col-md-4
              d-flex
              align-items-center
              justify-content-center justify-content-md-end
              mt-3 mt-md-0
            "
          >
            <NuxtLink to="/" class="btn btn-interface">На главную</NuxtLink>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  computed: {
    title() {
      return this.breadcrumbs[this.breadcrumbs.length - 1]?.text || ''
    },
  },
}
</script>
