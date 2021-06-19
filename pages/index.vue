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
        v-for="sport, index in filteredSports"
        :key="index"
        :code="sport.code"
        :image="sport.preview"
        :label="sport.name"
      />
    </div>
  </div>
</template>

<script>
import SportCard from '@/components/SportCard.vue';

export default {
  name: 'MainPage',
  data() {
    return {
      searchText: '',
      sports: [],
    }
  },


  computed: {
    filteredSports() {
      if (!this.sports.length) {
        return [];
      }
      return this.sports.filter(el => el.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  },

  async created() {
    this.sports = (await this.$axios.get('http://sport-advisor.shahruslan.ru/api/sports')).data;
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
      border: 1px solid $base;
      box-sizing: border-box;
      border-radius: 4px;
      // color: $text-main-color;
      margin-bottom: 16px;

      &::placeholder {
        color: $regulary;
        font-weight: 500;
      }
    }

    .el-input__icon {
      color: $regulary;
      height: unset;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
}
</style>
 