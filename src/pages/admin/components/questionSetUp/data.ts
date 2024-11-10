import {
  difficultyModeOptions,
  sqlTopicsOptions,
  typeOptions,
} from "@/data/question/question.data";

export const questionSetupHeaderOptions = [
  {
    name: "type",
    label: "Type",
    options: typeOptions,
    placeholder: "select type...",
  },
  {
    name: "",
    label: "Difficulty",
    options: difficultyModeOptions,
    placeholder: "select diffficulty",
  },
  {
    name: "",
    label: "SQL",
    options: sqlTopicsOptions,
    placeholder: "select sql lang...",
  },
];
