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
    <div className="w-full h-[calc(100vh-4rem)] bg-white pb-6">
      <Split
        minSize={100}
        sizes={[50, 50]}
        gutterSize={5}
        snapOffset={30}
        dragInterval={1}
        cursor="col-resize"
        expandToMin={false}
        gutterAlign="center"
        direction="horizontal"
        className="flex h-[calc(100vh-4rem)]"
      >
        <div className="h-full border-b border-r">
          <Header />
          <Editor />
        </div>
        <Output />
      </Split>
    </div>
  );
};

export default OnlineCodingIde;
