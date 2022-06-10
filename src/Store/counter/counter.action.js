import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./counter.actiontypes";

//Counter App
export const counterInc = () => ({ type: COUNTER_INCREMENT });
export const counterDec = () => ({ type: COUNTER_DECREMENT });
