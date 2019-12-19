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
} from '../../helper/constant';

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
      sortFilms: 'SORT_FILMS',
    }),
  },
  watch: {
    sort(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.sortFilms({
          films: this.films,
          sortByAsc: false,
          value: newVal,
        });
      }
    },
    filterLength(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (!newVal) {
          this.sortFilms({
            films: this.originFilms,
            sortByAsc: false,
            value: this.sort,
          });
          return;
        }

        const currentIndex = this.getFilterLengthOptions.findIndex(({ value }) => value === newVal);
        const nextIndex = currentIndex + 1 <= this.getFilterLengthOptions.length
          ? currentIndex + 1 : null;

        const filteredFilms = this.originFilms.filter(({ duration }) => {
          const nextOption = this.getFilterLengthOptions[nextIndex];
          const currentOption = this.getFilterLengthOptions[currentIndex];
          const hasNextValue = nextOption && nextOption.value;

          const smallThan = hasNextValue ? duration < hasNextValue : null;
          const biggerThan = duration >= currentOption.value;

          return hasNextValue ? (smallThan && biggerThan) : biggerThan;
        });

        this.sortFilms({
          films: filteredFilms,
          sortByAsc: false,
          value: this.sort,
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
