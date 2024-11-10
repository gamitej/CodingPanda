import {
  SqlTopicsType,
  DifficultyModeType,
  CodingTopicsType,
} from "@/data/question/question.type";

interface QuestionSetupType {
  name: string;
  text: string;
  premium: boolean;
  difficultyMode: DifficultyModeType | undefined;
  companyTags: "google" | "meta" | "microsoft" | undefined;
}

interface SqlQuestionType extends QuestionSetupType {
  type: "sql";
  topics: SqlTopicsType | undefined;
}

interface CodingQuestionType extends QuestionSetupType {
  type: "coding";
  topics: CodingTopicsType | undefined;
}

export interface QuestionSetupStateType {
  question: SqlQuestionType | CodingQuestionType;
}
