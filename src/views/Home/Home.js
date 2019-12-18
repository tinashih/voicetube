import {
  Film,
} from '@/components';

export default {
  components: {
    Film,
  },
  name: 'home',
  data() {
    return {
      films: [],
    };
  },
  mounted() {
    this.films = [
      {
        id: 52250,
        thumbnail: 'https://cdn.voicetube.com/assets/thumbnails/QxjsWwgPjwM.jpg',
        title: '台北人英文真的超強？這部影片告訴你！(中英字幕) (Do They Speak English In Taiwan?)',
        views: 526816,
        collectCount: 200,
        duration: 316,
        publish: 1519880251,
        level: 1,
        captions: [
          'cht',
          'en',
        ],
      },
    ];
  },
};
