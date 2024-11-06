// components
import { Editor } from "@/components";
import Header from "./components/Header";

const OnlineCodingIde = () => {
  /**
   * TSX
   */
  return (
    <div className="bg-white pt-1 pb-6 border w-[50%]">
      <Header />
      <Editor />
    </div>
  );
};

export default OnlineCodingIde;
