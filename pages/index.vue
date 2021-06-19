<template>
  <div class="main-page">
    <el-input
      class="main-page__search"
      suffix-icon="el-icon-search"
      placeholder="Выберите спорт"
      v-model="searchText"
      size="normal" clearable
    />
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
    }
  },

  async created() {
    // const a = await this.$axios.get('http://sport-advisor.shahruslan.ru/api/sports');
  }
}
</script>

<style lang="scss">
.main-page {
  padding: 63px 16px 0;

  .main-page__search {
    input {
      border: 1px solid #DCDFE6;
      box-sizing: border-box;
      border-radius: 4px;
      // color: $text-main-color;
      color: #606266;
      font-weight: 500;
      font-family: Inter, sans-serif;
    }
  }
}
</style>