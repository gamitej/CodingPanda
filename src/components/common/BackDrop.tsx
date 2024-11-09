import clsx from "clsx";
import { ReactNode } from "react";
// shadcn ui
import { Button } from "../ui/button";
// icons
import { LoadingSpinner } from "@/utils/Icons";

interface BackdropProps {
  children: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  /**
   * TSX
   */
  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-gray-200/80 dark:bg-gray-300/80"
      )}
    >
      <Button
        size="icon"
        variant="outline"
        className="flex items-center gap-2 w-fit py-6 px-4 text-gray-600 dark:bg-dark-light dark:text-gray-300"
      >
        <LoadingSpinner className="animate-spin" /> {children}
      </Button>
    </div>
  );
};

export default Backdrop;
