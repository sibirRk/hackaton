<template>
  <div class="welcome-screen" v-if="show">
    <div class="top">
      <div class="service-logo-wrapper">
        <img class="service-logo" src="/images/logo.svg" alt="service logo">
      </div>
      <div class="slider-wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide
            class="slider-item"
            v-for="slide, index in slides"
            :key="index"
          >
            <img :src="slide.img" alt="slide img" class="slide-img">
            <h2 class="slide-title">{{ slide.title }}</h2>
            <p class="slide-description">{{ slide.description }}</p>
          </swiper-slide>
          
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        
        <!--<div class="skip-btn">Пропустить</div>-->
      </div>
    </div>

    <div class="search-btn-wrapper">
      <el-button type="primary" size="default" @click="hide">Продолжить</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeScreen',

  data() {
    return {
      show: true,
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slides: [
        {
          img: '/images/welcome/1.png',
          title: 'Спорт в одном приложении',
          description: 'Приложение поможет найти вид спорта по душе и начать заниматься профессионально',
        },
        {
          img: '/images/welcome/1.png',
          title: 'Подготовим вас к практике',
          description: 'Мы поможем вам подготовиться к практике: вы узнаете как возник спорт, что для этого нужно, и где купить снаряжение.',
        },
        {
          img: '/images/welcome/1.png',
          title: 'Практика',
          description: 'Подскажем как выбрать хорошее место рядом с вами и опытного тренера',
        },
      ]
    }
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },

  created() {
    if (window.localStorage.getItem('welcome-screen-hidden')) {
      this.show = false;
    }
  },

  methods: {
    hide() {
      window.localStorage.setItem('welcome-screen-hidden', true);
      this.show = false;
    }
  }
}
</script>

<style lang="scss">
.welcome-screen {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  padding-bottom: 50px;

  background-color: #E4DFDA;

  .service-logo-wrapper {
    width: 100%;
    text-align: center;
  }

  .slide {
    &-title {
      font-size: 24px;
      line-height: 32px;
      font-weight: 800;
      text-align: center;
      margin-bottom: 8px;
    }

    &-description {
      padding: 0 20px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      text-align: center;
    }
  }

  .slider-item {
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .slider-pagination {
    height: 50px;
  }

  .swiper-container {
    padding-bottom: 40px;
  }

  .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    background-color: #fff;
    opacity: 1;
    transition: all .2s;
    margin: 0 6px;

    &-active {
      width: 40px;
      border-radius: 2px;
    }
  }

  .skip-btn {
    display: block;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: $blue;
  }

  .search-btn-wrapper {
    text-align: center;
  }
}
</style>