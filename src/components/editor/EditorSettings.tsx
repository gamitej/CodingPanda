import { useState } from "react";
// components
import EditorSettingBody from "./components/EditorSettingBody";
// shadcn
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
// icons
import { SettingIcon } from "@/utils/Icons";

const EditorSettings = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleEditorModal = () => {
    setIsOpen((state) => !state);
  };

  /**
   * TSX
   */
  return (
    <Dialog open={isOpen} onOpenChange={handleEditorModal}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SettingIcon className="text-2xl dark:text-gray-300 hover:bg-dark-light" />
        </Button>
      </DialogTrigger>
      <EditorSettingBody />
    </Dialog>
  );
};

export default EditorSettings;
