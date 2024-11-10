import { createSlice } from "@reduxjs/toolkit";
// type
import { QuestionSetupStateType } from "./type";

const initialState: QuestionSetupStateType = {
  question: {
    title: "",
    text: "",
    type: "coding",
    premium: false,
    topics: undefined,
    companyTags: undefined,
    difficultyMode: undefined,
  },
};
const QuestionSetupSlice = createSlice({
  name: "questionSetup",
  initialState,
  reducers: {
    setQuestionType: (state, { payload }: { payload: "sql" | "coding" }) => {
      state.question.text = "";
      state.question.type = payload;
    },
    setQuestionOptions: (
      state,
      { payload }: { payload: Partial<QuestionSetupStateType> }
    ) => {
      state.question = { ...state.question, ...payload };
    },
  },
});

// action creators
export const { setQuestionType } = QuestionSetupSlice.actions;

//
export const getQuestionType = (state: {
  questionSetup: QuestionSetupStateType;
}) => state.questionSetup.question.type;

export default QuestionSetupSlice.reducer;
