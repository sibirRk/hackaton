<template>
  <div class="list-item">
    <div class="image-wrapper">
      <img :src="image" alt="" />
    </div>
    <div class="text-content">
      <div class="title-block">
        <span class="title"> {{ title }} </span>
      </div>
      <span class="description">{{ description }}</span>
      <el-tag>от {{ price }} ₽/час</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",

  props: {
    image: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    price: {
      type: Number
    }
  }
};
</script>

<style lang="scss"></style>
