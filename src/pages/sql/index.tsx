import Editor from "./components/Editor";
import Header from "./components/Header";

const SqlEditor = () => {
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

export default SqlEditor;
