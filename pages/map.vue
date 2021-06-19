<template>
  <div class="map-page">
    <yandex-map
      class="yaMap"
      :coords="[43.40059, 39.964513]"
      :zoom="16.5"
      :controls="['zoomControl']"
    />
    <div class="search-input-wrapper">
      <el-select 
        v-model="selected"
        placeholder="Выберите спорт"
        clearable
        filterable
        multiple
      >
        <el-option v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapPage',
  data() {
    return {
      searchText: '',
      selected: undefined,
      options: [
        {
          value: 0,
          label: 'Футбол',
        },
        {
          value: 1,
          label: 'Баскетбол',
        },
        {
          value: 2,
          label: 'Воллейбол',
        },
        {
          value: 3,
          label: 'Литробол',
        },
      ]
    }
  }
}
</script>


<style lang="scss">
.map-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  .ymap-container {
    width: 100%;
    height: 100%;
  }

  .ymaps-2-1-78-gotoymaps__container {
    display: none;
  }

  .ymaps-2-1-78-gototech {
    display: none;
  }

  .ymaps-2-1-78-copyright__wrap {
    display: none;
  }

  .search-input-wrapper {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
  }

  .search-input-wrapper {
    width: 100%;
    padding: 0 20px;
    position: absolute;
    bottom: 20px;
  }

  .el-select {
    width: 100%;
  }
}
</style>
 