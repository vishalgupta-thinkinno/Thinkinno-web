import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./textContentSlice";

const thinkinnoDataStore = configureStore({
  reducer : {
    textContentSlice : textSlice.reducer
  }
})

export default thinkinnoDataStore;