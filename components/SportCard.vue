<template>
  <nuxt-link to="/" class="sport-card">
    <img :src="item.img" class="sport-card__img">
    <span class="sport-card__label">{{ item.label }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SportCard',

  props: {
    item: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss">
.sport-card {
  display: flex;
  flex-direction: column;
  background: #F0F1F3;
  border-radius: 4px;
  width: 100%;
  text-decoration: none;
  padding-bottom: 16px;

  &__img {
    margin-bottom: 28px;
  }

  &__label {
    color: #303133;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    text-align: center;
    border-bottom: unset;
  }
}
</style>