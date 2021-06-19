<template>
  <nuxt-link :to="`/sport/${code}`" class="sport-card">
    <img :src="image || '/images/sports/basketball.png'" class="sport-card__img">
    <span class="sport-card__label">{{ label }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SportCard',

  props: {
    code: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
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
    max-height: 100px;
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