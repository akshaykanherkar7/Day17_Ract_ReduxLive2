import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./counter.actiontypes";

export const Counterreducer = (state = { count: 0 }, { type }) => {
  switch (type) {
    case COUNTER_INCREMENT: {
      state.count++;
      return { ...state };
    }

    case COUNTER_DECREMENT: {
      state.count--;
      return { ...state };
    }

    default: {
      return state;
    }
  }
};
