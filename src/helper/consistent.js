export const COLLECT_COUNT = 'collectCount';
export const PUBLISH_TIME = 'publish';
export const VIEWS = 'views';

export const TIMES = {
  FIVE_TO_TEN_MINUTES: {
    min: 300,
    max: 600,
  },
  NO_LIMITED: null,
  OVER_TEN_MINUTES: {
    min: 601,
  },
  UNDER_FOUR_MINUTES: {
    min: 1,
    max: 299,
  },
};

export default {
  COLLECT_COUNT,
  PUBLISH_TIME,
  TIMES,
  VIEWS,
};
