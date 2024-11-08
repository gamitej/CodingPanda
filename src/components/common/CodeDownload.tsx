import { Button } from "@/components/ui/button";
// icons
import { FileDownloadIcon } from "@/utils/Icons";

function saveCodeToFile(filename: string, code: string) {
  const blob = new Blob([code], { type: "text/plain" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;

  link.click();
}

const CodeDownload = () => {
  const handlClick = () => {
    const code = "console.log('Hello, World!');";
    const filename = "hello.js";
    saveCodeToFile(filename, code);
  };

  /**
   * TSX
   */
  return (
    <Button
      onClick={handlClick}
      size="icon"
      variant="ghost"
      className="hover:dark:bg-dark-light"
    >
      <FileDownloadIcon className="text-gray-500" />
    </Button>
  );
};

export default CodeDownload;
