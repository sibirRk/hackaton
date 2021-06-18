import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';

const settings = {
  apiKey: process.env.MAPS_KEY || '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
}

Vue.use(YmapPlugin, settings);