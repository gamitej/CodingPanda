// ============== Difficulty mode labels ==================

export type DifficultyModeType = "easy" | "medium" | "hard";

export const DifficultyModeLabels: Record<DifficultyModeType, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

// ============== Sql topics labels ==================

export type SqlTopicsType = "select" | "join" | "aggregate";

export const SqlTopicsLabels: Record<SqlTopicsType, string> = {
  select: "Select",
  join: "Join",
  aggregate: "Aggregate",
};

// ============== Coding topic labels ==================

export type CodingTopicsType = "array" | "string" | "dp";

export const CodingTopicsLabels: Record<CodingTopicsType, string> = {
  array: "Array",
  string: "String",
  dp: "DP",
};
