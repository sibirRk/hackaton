<template>
  <div class="list-item" :class="{borderTransporent: !item.border}">
    <div class="image-wrapper" :class="{radius: item.coach}">
      <img :src="item.image" alt="" />
    </div>
    <div class="text-content">
      <div class="title-block">
        <span class="title"> {{ item.title }} </span>

        <img
          v-if="item.instagram"
          class="social-icon"
          :src="item.instagram"
          alt="soc-icon"
        />
        <img
          v-if="item.profiru"
          class="social-icon"
          :src="item.profiru"
          alt="soc-icon"
        />

        <div class="rate" v-if="item.rating">
          <img src="/images/star.svg" alt="" />
          <span>{{ item.rating }}</span>
        </div>
      </div>
      <span class="description">{{ item.description }}</span>
      <el-tag class="tag">от {{ item.price.toLocaleString() }} ₽/час</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",

  data() {
    return {
      image: "",
      title: "",
      description: "",
      price: 0,
      instagram: "",
      profiru: "",
      rating: "",
      border: null,
      coach: null
    };
  },

  props: {
    item: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
.list-item {
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #E4E7ED;
  padding-bottom: 16px;
  margin-bottom: 16px;

  &.borderTransporent {
    border-color: transparent
  }

  .title-block {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .image-wrapper {
    width: 75px;
    height: 75px;
    margin-right: 15px;

  }

  .radius {
      img {
        border-radius: 50%;
      }
    }

  .text-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-grow: 1;

    .title {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #303133;
    }
    .description {
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      color: #909399;
    }
  }

  .tag {
    height: 28px;
    background-color: $blue;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    margin-top: 7px;
  }
}
</style>
