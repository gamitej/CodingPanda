import { createSlice } from "@reduxjs/toolkit";
// type
import {
  SqlQuestionType,
  QuestionSetupType,
  CodingQuestionType,
  QuestionSetupStateType,
} from "./type";

const initialState: QuestionSetupStateType = {
  question: {
    title: "",
    type: "coding",
    premium: false,
    questionText: "",
    topics: undefined,
    companyTags: undefined,
    difficultyMode: undefined,
  },
};
const QuestionSetupSlice = createSlice({
  name: "questionSetup",
  initialState,
  reducers: {
    setQuestionType: (
      state,
      { payload }: { payload: SqlQuestionType | CodingQuestionType }
    ) => {
      state.question = { ...state.question, ...payload };
    },
    setQuestionStateOptions: (
      state,
      { payload }: { payload: Partial<QuestionSetupType> }
    ) => {
      state.question = { ...state.question, ...payload };
    },
  },
});

// action creators
export const { setQuestionType, setQuestionStateOptions } =
  QuestionSetupSlice.actions;

//
export const getQuestionStateData = (state: {
  questionSetup: QuestionSetupStateType;
}) => state.questionSetup.question;

export default QuestionSetupSlice.reducer;
