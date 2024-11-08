import { Button } from "@/components/ui/button";
// icons
import { FileDownloadIcon } from "@/utils/Icons";

const CodeDownload = () => {
  /**
   * TSX
   */
  return (
    <div>
      <Button size="icon" variant="ghost" className="hover:dark:bg-dark-light">
        <FileDownloadIcon className="text-gray-500" />
      </Button>
    </div>
  );
};

export default CodeDownload;
