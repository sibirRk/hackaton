<template>
<div class="sport-detail">
  <div class="video__wrapper">
    <video autoplay loop src="/video/header.mp4" muted="muted" class="video"></video>
    <div class="video__info">
      <h1 class="video__title">Настольный теннис</h1>
      <p class="video__description">Игра происходит на специальном теннисном столе. Посередине стола находится сетка...</p>
    </div>
  </div>
  <div class="sport__container">
    <div class="tabs-wrapper">
      <el-button :type="tab === 'about' ? 'primary' : ''" size="default" @click="tab = 'about'">О спорте</el-button>
      <el-button :type="tab === 'practice' ? 'primary' : ''" size="default" @click="tab = 'practice'">Практиковаться</el-button>
    </div>
    
    <div class="panels">
      <div class="panel panel_about" v-if="tab === 'about'">
        <div class="sport-information">
          <section class="section">
            <h2 class="section__title">Правила</h2>
            <transition name="fade">
              <article class="section__article" v-html="rulesShort ? rules.slice(0, 230) + '...' : rules"/>
            </transition>
            <el-button class="wide" @click="rulesShort = !rulesShort">{{ rulesShort ? 'Еще' : 'Скрыть' }}</el-button>
          </section>
          
          <section class="section">
            <h2 class="section__title">Определения</h2>
            <article class="section__article" v-html="glossaryShort ? glossary.slice(0, 230) + '...' : glossary" />
            <el-button class="wide" @click="glossaryShort = !glossaryShort">{{ glossaryShort ? 'Еще' : 'Скрыть' }}</el-button>
          </section>
        </div>

        <section class="section">
          <our-ambassadors />
        </section>
      </div>

      <div class="panel panel_practice" v-if="tab === 'practice'">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import OurAmbassadors from '~/components/OurAmbassadors.vue';

export default {
  name: 'SportDetail',

  data() {
    return {
      tab: 'about',
      rules: '<p>Игра происходит на специальном теннисном столе. Посередине стола находится сетка. При игре используются ракетки, состоящие из деревянного основания, покрытого с двух сторон резиновыми накладками разного цвета, обычно ярко-красного и чёрного. Игра происходит на специальном теннисном столе. Посередине стола находится сетка. При игре используются ракетки, состоящие из деревянного основания, покрытого с двух сторон резиновыми накладками разного цвета, обычно ярко-красного и чёрного.</p>',
      rulesShort: true,
      glossary: '<h3>Розыгрыш</h3> <p>период времени, когда мяч находится в игре</p> <h3>Мяч в игре</h3> <p>считается с последнего момента нахождения его на неподвижной ладони свободной кисти перед намеренным подбрасыванием его в подаче до тех пор, пока не будет решено, что розыгрыш следует переиграть или он завершён присуждением очка</p> <h3>Переигровка</h3> <p>розыгрыш, результат которого не засчитан</p>',
      glossaryShort: true,
    }
  },

  computed: {
    printRules() {
      return this.printShort(this.rulesShort, this.rules);
    },

    printGlossary() {
      return this.printShort(this.glossaryShort, this.glossary);
    },
  },

  methods: {
    printShort(toggle, string) {
      if (toggle) {
        const dots = string < 230 ? '' : '...';
        return string.slice(0, 230) + dots;
      }
      return dots;
    }
  },

  components: {
    OurAmbassadors,
  }
}
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

      &+.el-button {
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
    padding: 40px 0;
  }

  .section {
    margin-bottom: 40px;

    &__title {
      color: $primary;
      font-size: 24px;
      line-height: 1;
      margin-bottom: 15px;
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
}
</style>