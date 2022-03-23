<template>
  <div>
    <LangSelect />
    <Nuxt />
  </div>
</template>

<script>
export default {
  components: {
    LangSelect: () => import('~/components/LangSelect'),
  },
}
</script>
