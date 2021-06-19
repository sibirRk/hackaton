<template>
  <div class="list-item">
    <div class="image-wrapper">
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

        <div class="rate" v-if="rating">
          <img src="/huy.png" alt="" />
          <span>{{ item.rating }}</span>
        </div>
      </div>
      <span class="description">{{ item.description }}</span>
      <el-tag>от {{ item.price }} ₽/час</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",

  data() {
    return {
      image: '',
      title: '',
      description: '',
      price: 0,
      instagram:'',
      profiru: '',
      rating: ''
    };
  },

  props: {
    item: {
      type: Object
    }
  }
};
</script>

<style lang="scss"></style>
