<template>
  <div class="ambassador-detail">
    <ambassador-slide class="ambassador__header" :ambassador="ambassador" />
    <div class="ambassador__page">
      <h2 class="ambassador__name">{{ ambassador.name }}</h2>
      <p class="ambassador__regaly">{{ ambassador.regaly }}</p>
      
      <h3 class="article__title">{{ ambassador.article__title }}</h3>
      <p class="article__text" v-html="ambassador.text" />

      <iframe width="100%" height="265" src="https://www.youtube.com/embed/hr72tP9flTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import ambassadors from '~/data/ambassadors';
import AmbassadorSlide from '~/components/AmbassadorSlide.vue';

export default {
  name: 'AmbassadorDetail',

  data() {
    return {
      ambassadors,
    }
  },

  computed: {
    ambassador() {
      return {...this.ambassadors[0]};
    }
  },

  components: {
    AmbassadorSlide,
  }
}
</script>

<style lang="scss">
.ambassador-detail {
  text-decoration: none;

  .ambassador {
    &__header {
      margin-bottom: 24px;
    }

    &__page {
      padding: 0 15px;
    }

    &__name {
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: $primary;
    }

    &__regaly {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: $regulary;
      margin-bottom: 24px;
    }
  }

  .article {
    &__title {
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: $primary;
    }

    &__text {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: $regulary;
      margin-bottom: 24px;
    }
  }
}
</style>