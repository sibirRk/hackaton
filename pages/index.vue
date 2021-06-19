<template>
  <div class="main-page">
    <el-input
      class="main-page__search"
      suffix-icon="el-icon-search"
      placeholder="Выберите спорт"
      v-model="searchText"
      size="normal" clearable
    />

    <div class="main-page__cards">
      <sport-card
        v-for="sport, index in sports"
        :key="index"
        :item="sport"
      />
    </div>
  </div>
  
</template>

<script>
import SportCard from '@/components/SportCard.vue';

export default {
  data() {
    return {
      searchText: '',
      sports: [
        {
          img: '/images/sports/basketball.png',
          label: 'Баскетбол',
        },
        {
          img: '/images/sports/basketball.png',
          label: 'Бадминтон',
        },
        {
          img: '/images/sports/basketball.png',
          label: 'Бокс',
        },
        {
          img: '/images/sports/basketball.png',
          label: 'Волейбол',
        },
        {
          img: '/images/sports/basketball.png',
          label: 'Бейсбол',
        },
        {
          img: '/images/sports/basketball.png',
          label: 'Баскетбол',
        },
        {
          img: '/images/sports/basketball.png',
          label: 'Кёрлинг',
        },
      ]
    }
  },

  async created() {
    const a = await this.$axios.get('http://sport-advisor.shahruslan.ru/api/sports');
  },

  components: {
    SportCard,
  }
}
</script>

<style lang="scss">
.main-page {
  padding: 63px 16px 0;

  &__search {
    input {
      border: 1px solid #DCDFE6;
      box-sizing: border-box;
      border-radius: 4px;
      // color: $text-main-color;
      margin-bottom: 16px;

      &::placeholder {
        color: #606266;
        font-weight: 500;
      }
    }

    .el-input__icon {
      color: #606266;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
}
</style>