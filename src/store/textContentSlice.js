import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name : "textcontent",
    initialState : [],
    reducers : {
      addInitialText : (state, action)=> {
      return [...state, action.payload];
      }
  }
})

export const textSliceActions = textSlice.actions;
export default textSlice;
