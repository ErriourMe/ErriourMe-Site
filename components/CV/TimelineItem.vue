<template>
  <div class="timeline-item">
    <div class="timeline-item__title">
      <h3><slot name="title" /></h3>
      <div class="help"><slot name="subtitle" /></div>
    </div>
    <div class="timeline-item__description"><slot /></div>
  </div>
</template>

<style lang="scss">
.timeline-item {
  position: relative;

  & + & {
    margin-top: 60px;
  }

  &__description {
    margin-top: 8px;
  }

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    display: block;
    position: absolute;
    left: -41px;
    top: 9px;
  }
}
</style>
