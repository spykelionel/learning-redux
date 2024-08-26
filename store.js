const { configureStore, createSlice } = RTK;

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

window.store = store;
window.counterActions = counterSlice.actions;
