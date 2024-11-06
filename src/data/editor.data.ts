import {
  CodingLanguageTypes,
  SqlLanguageTypes,
} from "@/components/editor/type";

export const codingOptions: { value: CodingLanguageTypes; label: string }[] = [
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "python", label: "Python" },
  { value: "javascript", label: "Javascript" },
];

export const sqlOptions: { value: SqlLanguageTypes; label: string }[] = [
  { value: "mysql", label: "MySql" },
  { value: "oracle", label: "Oracle" },
  { value: "postgresql", label: "PostgreSql" },
];
