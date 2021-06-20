<template>
  <section class="section">
    <div class="top">
      <img src="" alt="">
       <h2 class="section__title fs-24">{{name}}</h2>
      <span class="description">{{description}}</span>
      <el-tag class="tag">от {{ price }} ₽/час</el-tag>
    </div>
    <div class="info">
      <h2 class="section__title mb-15 fs-24">О тренере</h2>
      <span class="description">{{about}}</span>
    </div>
    <div class="info">
      <h2 class="section__title">Опыт</h2>
      <span class="description">{{ experience }}</span>
    </div>
    <div class="info">
      <h2 class="section__title">Образование</h2>
      <span class="description">{{education}}</span>
    </div>
      <div class="info">
      <h2 class="section__title">Социальная сеть</h2>
      <span class="description black"><img src="/images/instagramm.svg" alt=""><a :href="link">{{ social }}</a></span>
    </div>
    <div class="info">
      <h2 class="section__title">Телефон</h2>
      <span class="description"><a href="#">{{ phone }}</a></span>
    </div>

  </section>
</template>

<script>
export default {
  name: 'CouchDetail',

  data() {
    return {
      name: '',
      description: '',
      about: '',
      experience: '',
      education: '',
      link: '',
      social: '',
      phone: '',
      price: 0

    }
  },
   props: {
    item: {
      type: Object,
    },
  }
}
</script>

<style lang="scss">
.section {
    padding: 0 16px;

    .tag {
    height: 28px;
    background-color: $blue;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    margin-top: 12px;
  }
    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      padding-bottom: 16px;
      margin-bottom: 40px;
      border-bottom: 1px solid #E4E7ED
    }

  

    .rating {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #606266;
      margin-top: 14px;
    }

    .info {
      margin-bottom: 16px;
    }

    .section__title {
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
      color: #000000;
      margin-bottom: 4px;
    }

    .description {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      justify-self: start;
      img {
        margin-right: 8px;
      }
      
      a {
        color: #606266;
        text-decoration: none;
      }
    }


    
    .fs-24 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .mb-15 {
      margin-bottom: 15px;
    }

    .black {
      font-weight: bold;
      font-size: 12px;
      line-height: 28px;
      color: #303133;
    }

    .mt-40 {
      margin-top: 40px;
      margin-bottom: 24px;
    }
  }
</style>