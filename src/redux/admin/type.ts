interface QuestionSetupState {
  question: {
    text: string;
    difficultyMode: "easy" | "medium" | "hard";
    companyTag: "google" | "meta" | "microsoft" | undefined;
    premium: boolean;
    topic: "";
    type: "";
  };
}
