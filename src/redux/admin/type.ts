import {
  SqlTopicsType,
  CodingTopicsType,
  DifficultyModeType,
} from "@/data/question/question.type";

export type QuestionSetupType = {
  title: string;
  premium: boolean;
  questionText: string;
  difficultyMode: DifficultyModeType | undefined;
  companyTags: "google" | "meta" | "microsoft" | undefined;
};

export type SqlQuestionType = {
  type: "sql";
  topics: SqlTopicsType | undefined;
};

export type CodingQuestionType = QuestionSetupType & {
  type: "coding";
  topics: CodingTopicsType | undefined;
};

export interface QuestionSetupStateType {
  question:
    | (QuestionSetupType & CodingQuestionType)
    | (QuestionSetupType & SqlQuestionType);
}
