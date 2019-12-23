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
      'loading',
      'originFilms',
    ]),
    getFilterButtonToggleProps() {
      return {
        'data-qa': 'Home-FilterButtonToggle',
      };
    },
    getFilterLengthOptions() {
      return [
        {
          buttonProps: {
            'data-qa': 'Home-FilterButtonToggle-Button-NoLimited',
          },
          label: '不限',
          value: TIMES.NO_LIMITED,
        },
        {
          buttonProps: {
            'data-qa': 'Home-FilterButtonToggle-Button-UnderFourMinutes',
          },
          label: '4分鐘以下',
          value: TIMES.UNDER_FOUR_MINUTES,
        },
        {
          buttonProps: {
            'data-qa': 'Home-FilterButtonToggle-Button-FiveToTenMinutes',
          },
          label: '5 - 10分鐘',
          value: TIMES.FIVE_TO_TEN_MINUTES,
        },
        {
          buttonProps: {
            'data-qa': 'Home-FilterButtonToggle-Button-OverTenMinutes',
          },
          label: '超過10分鐘',
          value: TIMES.OVER_TEN_MINUTES,
        },
      ];
    },
    getFilterTitleProps() {
      return {
        'data-qa': 'Home-FilterButtonToggle-Title',
      };
    },
    getSortButtonToggleProps() {
      return {
        'data-qa': 'Home-SortButtonToggle',
      };
    },
    getSortOptions() {
      return [
        {
          buttonProps: {
            'data-qa': `Home-SortButtonToggle-Button-${PUBLISH_TIME}`,
          },
          label: '發布時間',
          value: PUBLISH_TIME,
        },
        {
          buttonProps: {
            'data-qa': `Home-SortButtonToggle-Button-${VIEWS}`,
          },
          label: '觀看次數',
          value: VIEWS,
        },
        {
          buttonProps: {
            'data-qa': `Home-SortButtonToggle-Button-${COLLECT_COUNT}`,
          },
          label: '收藏次數',
          value: COLLECT_COUNT,
        },
      ];
    },
    getSortTitleProps() {
      return {
        'data-qa': 'Home-SortButtonToggle-Title',
      };
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
    films(newVal, oldVal) {
      if (newVal.length && !oldVal.length) {
        this.sortCurrentFilms(newVal, this.sort);
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
