<template>
  <div class="container py-5">
    <div
      class="d-flex flex-column align-items-center justify-content-center h-100 py-5"
    >
      <h1 class="text-white">{{ error.statusCode }}</h1>
      <div class="text-white">{{ $t(`error.${error.statusCode}`) }}</div>

      <NuxtLink to="/" class="btn btn-interface mt-4">
        {{ $t('actions.home') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
