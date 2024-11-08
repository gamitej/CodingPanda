import { FC } from "react";

interface OutputBoxProps {
  isLoading: boolean;
}

const OutputBox: FC<OutputBoxProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <div className="w-full py-3 px-4 rounded-md border dark:border-gray-800 border-l-4 border-l-blue-400 dark:border-l-blue-600 bg-light-dim dark:bg-dark-light text-gray-500 dark:text-gray-300">
          {" "}
          Executing code...{" "}
        </div>
      </div>
    );
  }

  /**
   * TSX
   */
  return (
    <div className="rounded-md">
      <div></div>
      <div></div>
    </div>
  );
};

export default OutputBox;
