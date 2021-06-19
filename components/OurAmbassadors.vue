<template>
  <div class="our-ambassadors">
    <swiper :options="swiperOptions">
      <swiper-slide
        class="slider-item"
        v-for="(slide, index) in ambassadors"
        :key="index"
      >
        <ambassador-slide
          :ambassador="slide"
        />
      </swiper-slide>
          
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import AmbassadorSlide from '~/components/AmbassadorSlide.vue';

export default {
  name: 'OurAmbassadors',

  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      ambassadors: [
        {
          instagram: '@shmirev_max',
          photo: '/images/ambassadors/shmirev.png',
          title: 'Максим Шмырёв о своих тренировках',
        },
        {
          instagram: '@shmirev_max',
          photo: '/images/ambassadors/shmirev.png',
          title: 'Максим Шмырёв о своих тренировках',
        },
        {
          instagram: '@shmirev_max',
          photo: '/images/ambassadors/shmirev.png',
          title: 'Максим Шмырёв о своих тренировках',
        },
        {
          instagram: '@shmirev_max',
          photo: '/images/ambassadors/shmirev.png',
          title: 'Максим Шмырёв о своих тренировках',
        },
        {
          instagram: '@shmirev_max',
          photo: '/images/ambassadors/shmirev.png',
          title: 'Максим Шмырёв о своих тренировках',
        },
      ]
    }
  },

  props: {
  },

  components: {
    AmbassadorSlide,
  }
}
</script>

<style lang="scss">
.our-ambassadors {
  .swiper-pagination {
    display: flex;

    width: calc(100% - 30px);
    left: 15px;

    .swiper-pagination-bullet {
      width: 100%;
      border-radius: 4px;
      background-color: rgba($white, 0.3);

      &-active {
        background-color: $white;
      }
    }
  }
}
</style>