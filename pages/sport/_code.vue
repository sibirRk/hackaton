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
      <div class="panel panel_about" v-if="tab === 'about'">1</div>
      <div class="panel panel_practice" v-if="tab === 'practice'">2</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SportDetail',

  data() {
    return {
      tab: 'about',
    }
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
      color: #dcdfe6;
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
    }
  }
}
</style>