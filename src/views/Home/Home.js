import {
  mapActions,
  mapState,
} from 'vuex';

import {
  ButtonToggle,
  Film,
} from '@/components';

import {
  COLLECT_COUNT,
  PUBLISH_TIME,
  TIMES,
  VIEWS,
} from '../../helper/consistent';

export default {
  components: {
    ButtonToggle,
    Film,
  },
  computed: {
    ...mapState('films', [
      'films',
      'originFilms',
    ]),
    getFilterLengthOptions() {
      return [
        {
          label: '不限',
          value: TIMES.NO_LIMITED,
        },
        {
          label: '4分鐘以下',
          value: TIMES.UNDER_FOUR_MINUTES,
        },
        {
          label: '5 - 10分鐘',
          value: TIMES.FIVE_TO_TEN_MINUTES,
        },
        {
          label: '超過10分鐘',
          value: TIMES.OVER_TEN_MINUTES,
        },
      ];
    },
    getSortOptions() {
      return [
        {
          label: '發布時間',
          value: PUBLISH_TIME,
        },
        {
          label: '觀看次數',
          value: VIEWS,
        },
        {
          label: '收藏次數',
          value: COLLECT_COUNT,
        },
      ];
    },
  },
  methods: {
    ...mapActions('films', {
      getFilms: 'GET_FILMS',
      filterFilms: 'FILTER_FILMS',
      sortFilms: 'SORT_FILMS',
    }),
    sortCurrentFilms(films = this.films, value) {
      this.sortFilms({
        films,
        sortByAsc: false,
        value,
      });
    },
  },
  watch: {
    sort(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.sortCurrentFilms(this.films, newVal);
      }
    },
    filterLength(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (!newVal) {
          this.sortCurrentFilms(this.originFilms, this.sort);
          return;
        }

        this.filterFilms({
          sort: this.sort,
          value: newVal,
        });
      }
    },
  },
  name: 'home',
  created() {
    this.getFilms();
  },
  data() {
    return {
      filterLength: null,
      sort: null,
    };
  },
  mounted() {
    this.sort = PUBLISH_TIME;
  },
};
