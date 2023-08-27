import { createSlice } from "@reduxjs/toolkit";

const refSlice = createSlice({
  name: "ref",
  initialState: { refs: [] },
  reducers: {
    setRef(state, action) {
      state.refs.push(action.payload.ref);
    },
  },
});

export const { setRef } = refSlice.actions;

export default refSlice.reducer;
