import { configureStore } from "@reduxja/toolkit";
import useReducer from "./userSlice";
import questionReducer from "./questionSlice";

export default configureStore({
  reducer: {
    user: useReducer,
    question: questionReducer,
  },
});
