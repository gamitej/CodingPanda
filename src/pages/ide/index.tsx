import Split from "react-split";
// components
import Output from "./components/Output";
import Header from "./components/Header";
import Editor from "./components/Editor";

const OnlineCodingIde = () => {
  /**
   * TSX
   */
  return (
    <div className="w-full h-[calc(100vh-4rem)] bg-white dark:bg-dark-medium pb-6">
      {/*========= for larger and bigger screen =========*/}
      <Split
        minSize={500}
        sizes={[50, 50]}
        gutterSize={5}
        snapOffset={30}
        dragInterval={1}
        cursor="col-resize"
        expandToMin={false}
        gutterAlign="center"
        direction="horizontal"
        className="hidden lg:flex h-[calc(100vh-4rem)]"
      >
        <div className="h-full border-r dark:border-r-gray-800">
          <Header />
          <Editor />
        </div>
        <Output />
      </Split>

      {/*========= for medium and smaller screen =========*/}
      <div className="flex flex-col lg:hidden dark:bg-dark-medium">
        <div className="h-full border-b dark:border-b-gray-800">
          <Header />
          <Editor />
        </div>
        <Output />
      </div>
    </div>
  );
};

export default OnlineCodingIde;
