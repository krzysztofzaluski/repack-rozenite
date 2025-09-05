import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type CounterState = {value: number};

const initialState: CounterState = {value: 0};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    addBy(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export default slice; // eksportujemy cały slice (akcje + reducer)
