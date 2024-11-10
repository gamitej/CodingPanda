import {
  CodingTopicsLabels,
  CodingTopicsType,
  DifficultyModeLabels,
  DifficultyModeType,
  SqlTopicsLabels,
  SqlTopicsType,
} from "./question.type";

export const difficultyModeOptions = Object.entries(DifficultyModeLabels).map(
  ([value, label]) => ({
    value: value as DifficultyModeType,
    label,
  })
);

export const sqlTopicsOptions = Object.entries(SqlTopicsLabels).map(
  ([value, label]) => ({
    value: value as SqlTopicsType,
    label,
  })
);

export const codingTopicsOptions = Object.entries(CodingTopicsLabels).map(
  ([value, label]) => ({
    value: value as CodingTopicsType,
    label,
  })
);
