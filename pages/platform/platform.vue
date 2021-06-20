<template>
  <section class="section border">
     <our-ambassadors :ambassadors="coaches" />
    <div class="top">
      <h2 class="section__title fs-24">PING PONG CLUB</h2>
      <span class="description">г. Краснодар, ул. Мира, 3</span>
      <div class="rating">
        <img src="/images/star.svg" alt="">
        <span>4,9</span>
      </div>
    </div>
    <div class="info">
      <h2 class="section__title mb-15 fs-24">О площадке</h2>
      <span class="description">Всего 16 столов. Площадь 500 м2. В инвентаре числиться 36 ракеток и 50 мячей.</span>
    </div>
    <div class="info">
      <h2 class="section__title">Расписание</h2>
      <span class="description">Открыто с 09:00 до 20:00, без выходных</span>
    </div>
    <div class="info">
      <h2 class="section__title">Сайт</h2>
      <span class="description"><a href="#">pingpongclub.ru</a></span>
    </div>
      <div class="info">
      <h2 class="section__title">Социальная сеть</h2>
      <span class="description black"><img src="/images/instagramm.svg" alt=""><a href="#">@club123ping</a></span>
    </div>
    <div class="info">
      <h2 class="section__title">Телефон</h2>
      <span class="description"><a href="#">+7 (918) 123-34-44</a></span>
    </div>
    <h2 class="section__title mb-15 fs-24 mt-40">Тренеры на этой площадке</h2>
    <list-item v-for="(card, index) in cards" :key="index" :item="card" />
  </section>
</template>

<script>

import OurAmbassadors from '~/components/OurAmbassadors.vue';
import ListItem from "@/components/ListItem";
import coaches from "~/data/coach"
export default {

  name: 'PlatformDetail',

  data() {
    return {
      cards: [
        {
          image: "/images/items/item-1.png",
          title: "Святослав Гавронский",
          description: "КМС по настольному теннису и шахматам",
          price: 1500,
          rating: "4,9",
          coach: true,
          border: true
        },
        {
          image: "/images/items/item-1.png",
          title: "Игорь Кустов",
          description: "КМС по настольному теннису и шахматам",
          price: 1500,
          rating: "4,9",
          coach: true,
          border: true
        },
        {
          image: "/images/items/item-1.png",
          title: "Юлия Попова",
          description: "КМС по настольному теннису и шахматам",
          price: 1500,
          rating: "4,9",
          coach: true,
          border: true
        },
        {
          image: "/images/items/item-1.png",
          title: "Клуб «Белый парус»",
          description: "КМС по настольному теннису и шахматам",
          price: 1500,
          rating: "4,9",
          coach: true,
          border: false
        }
      ],
      coaches,
    }

  }
  
}
</script>

<style lang="scss">
  .section {
    padding: 0 16px;
    .top {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
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