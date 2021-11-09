<template>
  <div class="timeline">
    <slot />
  </div>
</template>

<style lang="scss">
.timeline {
  position: relative;
  padding-left: 35px;
  padding-top: 15px;

  &:before {
    position: absolute;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      0deg,
      transparent,
      #555 40px,
      #555 calc(100% - 40px),
      transparent
    );
    left: -2px;
    top: 0;
    content: '';
  }
}
</style>
