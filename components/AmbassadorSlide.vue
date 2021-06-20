<template>
  <div class="ambassador-slide" :class="{height260 : ambassador.logo}">
    <img src="/images/new-logo.svg"  class="new-logo" v-if="ambassador.logo" alt="">
    <nuxt-link to="/ambassador/1">
      <a target="blank" class="instagram__wrapper" v-if="ambassador.instagram">
        <img src="/images/instagramm.svg" alt="instagram icon" class="instagram__link">
        <span class="instagram__link">{{ ambassador.instagram }}</span>
      </a>

      <span class="ambassador__title" v-if="ambassador.title">{{ ambassador.title }}</span>
      <img :src="ambassador.photo" alt="ambassador photo" class="ambassador__image">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'AmbassadorSlide',
  
  props: {
    ambassador: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.ambassador-slide {
  position: relative;
  width: 100%;
  height: 360px;
  background-color: $blue;
  overflow: hidden;

  .new-logo {
   width: 120.91px;
   position: absolute;
   top: 0;
  height: 20px;
  }

  .instagram {
    &__wrapper {
      position: absolute;
      top: 20px;
      left: 16px;

      display: flex;
      align-items: center;
      text-decoration: none;
      color: $white;
      font-size: 12px;
      line-height: 1;
      font-weight: 700;

      img {
        width: 20px;
        height: 20px;
        margin-right: 4px;
      }
    }
  }

  .ambassador {
    &__title {
      position: absolute;
      left: 16px;
      bottom: 37px;
      font-size: 24px;
      line-height: 28px;
      max-width: 250px;
      font-weight: 700;
      color: $white;
      z-index: 1;
    }

    &_link {
      color: $white;
    }

    &__image {
      position: absolute;
      bottom: 0;
      left: 48px;
      z-index: 0;
    }
  }
  &.height260 {
    height: 260px!important;

    .ambassador__image {
      left: 0;
      top: 0;
      height: 100%;
    
    }
  }
}
</style>