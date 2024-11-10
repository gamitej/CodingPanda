import { useSelector } from "react-redux";
// components
import { MarkdownOverview } from "@/components";
// shadcn-ui
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
// icons
import { EyeScanIcon } from "@/utils/Icons";
// redux
import { getMarkDownEditorText } from "@/redux/admin/markDownSlice";
import { getQuestionStateData } from "@/redux/admin/questionSetupSlice";

function PreviewModal() {
  const markdownContent = useSelector(getMarkDownEditorText);

  const { title } = useSelector(getQuestionStateData);

  /**
   * TSX
   */
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-600 p-6">
          <EyeScanIcon />
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="border-b pb-4 dark:border-gray-800">
          <DialogTitle className="text-center text-2xl font-normal dark:text-gray-300">
            Preview Question
          </DialogTitle>
        </DialogHeader>
        <div>
          <p>{title}</p>
          <MarkdownOverview height="80vh" content={markdownContent} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PreviewModal;
