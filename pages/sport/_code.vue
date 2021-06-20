<template>
  <div class="sport-detail">
    <div class="video__wrapper">
      <video
        v-if="sport && sport.video"
        autoplay
        loop
        :src="sport.video"
        muted="muted"
        class="video"
      ></video>
      <div class="video__info">
        <h1 class="video__title" v-if="sport.name">{{ sport.name }}</h1>
        <p class="video__description" v-if="sport.description">{{ sport.description.slice(0, 100) + '...' }}</p>
      </div>
    </div>
    <div class="sport__container">
      <div class="tabs-wrapper">
        <el-button
          :type="tab === 'about' ? 'primary' : ''"
          size="default"
          @click="tab = 'about'"
          >О спорте</el-button
        >
        <el-button
          :type="tab === 'practice' ? 'primary' : ''"
          size="default"
          @click="tab = 'practice'"
          >Практиковаться</el-button
        >
      </div>
    
      <div class="panels">
        <div class="panel panel_about" v-if="tab === 'about'">
          <div class="sport-information">
            <section class="section" v-if="sport && sport.rules">
              <h2 class="section__title">Правила</h2>
              <transition name="fade">
                <article class="section__article" v-html="rulesShort ? rules.slice(0, 230) + '...' : rules"/>
              </transition>
              <el-button class="wide" @click="rulesShort = !rulesShort">{{ rulesShort ? 'Еще' : 'Скрыть' }}</el-button>
            </section>
            
            <section class="section" v-if="sport && sport.terms">
              <h2 class="section__title">Определения</h2>
              <article class="section__article" v-html="glossaryShort ? glossary.slice(0, 230) + '...' : glossary" />
              <el-button class="wide" @click="glossaryShort = !glossaryShort">{{ glossaryShort ? 'Еще' : 'Скрыть' }}</el-button>
            </section>
          </div>

          <section class="section">
            <h2 class="section__title">Наши амбассадоры</h2>
            <our-ambassadors :ambassadors="ambassadors" :key="index" />
          </section>
        </div>

        <div class="panels">
          <div class="panel panel_about" v-if="tab === 'about'">
            <div class="sport-information">
              <section class="section">
                <h2 class="section__title">Правила</h2>
                <transition name="fade">
                  <article
                    class="section__article"
                    v-html="rulesShort ? rules.slice(0, 230) + '...' : rules"
                  />
                </transition>
                <el-button class="wide" @click="rulesShort = !rulesShort">{{
                  rulesShort ? "Еще" : "Скрыть"
                }}</el-button>
              </section>

              <section class="section">
                <h2 class="section__title">Определения</h2>
                <article
                  class="section__article"
                  v-html="
                    glossaryShort ? glossary.slice(0, 230) + '...' : glossary
                  "
                />
                <el-button class="wide" @click="glossaryShort = !glossaryShort">{{
                  glossaryShort ? "Еще" : "Скрыть"
                }}</el-button>
              </section>

              <section class="section">
                <h2 class="section__title">Ваши расходы на инвентарь</h2>
                <list-item v-for="(card, index) in cards" :key="index" :item="card" border />
                <div class="spendings">
                  <span class="spendings__total">Итого:</span>
                  <span class="spendings__sum">от {{ spendingsTotal }} ₽</span>
                </div>
                <a href="#" target="_blank">
                  <el-button class="wide" type="primary" size="default">Купить товары</el-button>
                </a>
              </section>

              <section class="section how-to-train">
                <h2 class="section__title section__title_inverted" :style="{marginBottom: '24px'}">Как тренироваться</h2>
                
                <swiper :options="swiperOptions">
                  <swiper-slide
                    class="slider-item"
                    v-for="(slide, index) in howToTrainVideos"
                    :key="index"
                  >
                    <iframe width="100%" height="188" src="https://www.youtube.com/embed/hr72tP9flTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </swiper-slide>
                      
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
              </section>

              <section class="section lets-train">
                <img src="/images/ready-icon.svg" alt="ready icon" class="lets-train__icon">
                <h2 class="section__title lets-train__title">Потренируемся?</h2>
                <p class="lets-train__description">Поможем выбрать место и найти профессионального тренера.</p>
                <div class="lets-train__buttons">
                  <el-button class="wide" type="primary" size="default" @click="showPracticeTab">Найти площадку</el-button>
                  <el-button class="wide" type="primary" size="default" @click="showPracticeTab">Найти тренера</el-button>
                </div>
              </section>
            </div>
          </div>

          <div class="panel panel_practice" v-if="tab === 'practice'">
            <section class="section">
              <h2 class="section__title">Выберите площадку</h2>
              <div class="list-type-selector" @click="map = !map">
                {{ map ? 'Списком' : 'На карте' }}
              </div>

              <template v-if="!map">
                <nuxt-link to="/platform/1">
                  <list-item v-for="(card, index) in printPlatforms" :key="index" :item="card" border />
                </nuxt-link>
                <el-button class="wide" @click="allPlatforms = !allPlatforms">{{ !allPlatforms ? 'Еще' : 'Скрыть' }}</el-button>
              </template>

              <div class="map-block" v-else>
                <map-page />
              </div>
            </section>

            <section class="section">
              <h2 class="section__title">Выберите тренера</h2>

              <list-item v-for="(card, index) in printCoaches" :key="index" :item="card" border />
              <el-button class="wide" @click="allCoaches = !allCoaches">{{ !allCoaches ? 'Еще' : 'Скрыть' }}</el-button>
            </section>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import coaches from '~/data/coaches';
import ListItem from "@/components/ListItem";
import OurAmbassadors from '~/components/OurAmbassadors.vue';
import MapPage from '~/pages/map.vue';

export default {
  name: "SportDetail",

  data() {
    return {
      sport: {},
      tab: 'about',
      map: false,
      // coaches,
      allPlatforms: false,
      allCoaches: false,
      // rules:
      //   "<p>Игра происходит на специальном теннисном столе. Посередине стола находится сетка. При игре используются ракетки, состоящие из деревянного основания, покрытого с двух сторон резиновыми накладками разного цвета, обычно ярко-красного и чёрного. Игра происходит на специальном теннисном столе. Посередине стола находится сетка. При игре используются ракетки, состоящие из деревянного основания, покрытого с двух сторон резиновыми накладками разного цвета, обычно ярко-красного и чёрного.</p>",
      rulesShort: true,
      // glossary: "<h3>Розыгрыш</h3> <p>период времени, когда мяч находится в игре</p> <h3>Мяч в игре</h3> <p>считается с последнего момента нахождения его на неподвижной ладони свободной кисти перед намеренным подбрасыванием его в подаче до тех пор, пока не будет решено, что розыгрыш следует переиграть или он завершён присуждением очка</p> <h3>Переигровка</h3> <p>розыгрыш, результат которого не засчитан</p>",
      glossaryShort: true,
      // cards: [
      //   {
      //     image: "/images/items/item-2.png",
      //     title: "Ракетка для настольного тенниса",
      //     description: "Donic Waldner 700 черный",
      //     price: 2780,
      //   },
      //   {
      //     image: "/images/items/item-1.png",
      //     title: "Мячики для настольного тенниса",
      //     description: "Donic Waldner 700 черный",
      //     price: 720,
      //   },
      // ],
      howToTrainVideos: [
        {
          url: '',
          text: '',
        },
        {
          url: '',
          text: '',
        },
      ],
      swiperOptions: {
        slidesPerView: 1.25,
        height: 188,
        spaceBetween: 16,
        followFinger: true,
      },
    };
  },

  computed: {
    code() {
      return this.$route.params.code;
    },

    rules() {
      return this.sport && this.sport.rules ? this.sport.rules : '';
    },

    glossary() {
      return this.sport && this.sport.terms ? this.sport.terms : '';
    },

    ambassadors() {
      return this.sport && this.sport.ambasadors ? this.sport.ambasadors : [];
    },

    cards() {
      if (!(this.sport && this.sport.inventories)) {
        return [];
      }
      return this.sport.inventories;
    },

    platforms() {
      return this.sport && this.sport.objects ? this.sport.objects : [];
    },

    coaches() {
      return this.sport && this.sport.trainers ? this.sport.trainers : [];
    },

    printRules() {
      return this.printShort(this.rulesShort, this.rules);
    },

    printGlossary() {
      return this.printShort(this.glossaryShort, this.glossary);
    },

    spendingsTotal() {
      let sum = 0;
      if (this.cards) {
        this.cards.forEach(el => {
          sum += el.price;
        })
      }
      return sum;
    },

    printPlatforms() {
      if (!this.platforms.length) {
        return [];
      }

      if (this.allPlatforms) {
        return this.platforms;
      }
      return this.platforms.slice(0, 3);
    },

    printCoaches() {
      if (!this.coaches.length) {
        return [];
      }

      if (this.allCoaches) {
        return this.coaches;
      }

      return this.coaches.slice(0, 3);      
    }
  },

  async created() {
    this.sport = (await this.$axios.get(`http://sport-advisor.shahruslan.ru/api/sports/${this.code}`)).data;
  },

  methods: {
    printShort(toggle, string) {
      if (toggle) {
        const dots = string < 230 ? "" : "...";
        return string.slice(0, 230) + dots;
      }
      return dots;
    },

    showPracticeTab(type) {
      this.tab = 'practice';
      setTimeout(() => {
        window.scrollTo({
          top: 615,
          scroll: 'smooth',
        })
        
      }, 1000);
    }
  },
  components: {
    ListItem,
    OurAmbassadors,
    MapPage,
  }
};
</script>

<style lang="scss">
.sport-detail {
  .video {
    &__wrapper {
      width: 100%;
      height: 379px;
      position: relative;

      video {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &__info {
      padding: 20px;

      position: absolute;
      left: 0;
      bottom: 0;
      height: 185px;
      width: 100%;
      overflow: hidden;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    &__title {
      color: #fff;
      font-size: 28px;
      line-height: 36px;
      font-weight: 700;
    }

    &__description {
      color: $base;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
    }
  }

  .sport__container {
    padding: 16px;
  }

  .tabs-wrapper {
    display: flex;
    margin-bottom: 40px;

    .el-button {
      width: 100%;

      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:nth-child(2) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      & + .el-button {
        margin-left: 0;
      }

      span {
        font-family: Inter, sans-serif;
        font-weight: 500;
        color: $black;
      }

      &.el-button--primary {
        span {
          color: $white;
        }
      }
    }
  }

  .panel {
    padding-bottom: 40px;

    .sport-information {
      & + .section {
        margin-bottom: 0;
      }
    }
  }

  .section {
    margin-bottom: 40px;

    &.how-to-train {
      padding: 40px 16px;
      background-color: $primary;
      margin-left: -16px;
      margin-right: -16px;
    }

    &__title {
      color: $primary;
      font-size: 24px;
      line-height: 1;
      margin-bottom: 15px;
      font-weight: 700;

      &_inverted {
        color: $white;
      }

      .section__title {
        margin-bottom: 24px;
      }
    }

    &__subtitle {
      color: $primary;
      font-size: 18px;
      line-height: 20px;
    }

    &__article {
      font-size: 16px;
      line-height: 24px;
      color: $regulary;
      margin-bottom: 16px;

      h3 {
        font-size: 16px;
        line-height: 24px;
        color: $primary;
        font-weight: 700;
        margin-bottom: 4px;
      }

      p {
        color: $regulary;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 16px;
      }
    }
  }

  .spendings {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .lets-train {
    &__icon {
      width: 30px;
      height: 30px;
      margin-bottom: 20px;
    }

    &__description {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: $regulary;
      margin-bottom: 24px;
    }

    &__buttons {
      display: flex;
    }
  }

  .list-type-selector {
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    color: $blue;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .map-block {
    height: 466px;
  }
}
</style>
