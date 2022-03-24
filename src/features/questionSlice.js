import { createSlice } from "@reduxjs/toolkit";

export const quesitionSlice = createSlice({
  name: "quesition",
  initialState: {
    questionId: null,
    questionName: null,
  },
  reducers: {
    setQuestionInfo: (state, action) => {
      state.questionId = action.payload.questionId;
      state.questionName = action.payload.questionName;
    },
  },
});

export const { setQuestionInfo } = quesitionSlice.actions;
export const selectQuestionId = (state) => state.question.questionId;
export const selectQuestionName = (state) => state.question.questionName;
export default quesitionSlice.reducers;
