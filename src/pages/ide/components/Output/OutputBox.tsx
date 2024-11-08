import { FC } from "react";

interface OutputBoxProps {
  isLoading: boolean;
  stderr: string;
  output: string;
  time: string;
  memory: string;
}

const OutputBox: FC<OutputBoxProps> = ({ isLoading, ...res }) => {
  // ! run time and memory is still not done

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
    <div className="flex flex-col gap-2">
      <h3 className="text-gray-500 dark:text-gray-300 font-semibold">
        {" "}
        Output{" "}
      </h3>
      <div className="w-full flex flex-col gap-4 py-1">
        <StatusCard {...res} />
      </div>
    </div>
  );
};

export default OutputBox;

function StatusCard({ stderr = "", output = "" }) {
  // =============== code execution unsuccessfull ===================
  if (stderr.length !== 0) {
    return (
      <div className="w-full flex flex-col gap-4 rounded-md border dark:border-gray-800 p-3 bg-white dark:bg-dark-light">
        <div className="w-full py-3 px-4 rounded-md border border-red-200 dark:border-red-200 border-l-[5px] border-l-red-400 dark:border-l-red-500 bg-red-100 dark:bg-red-200 text-gray-500 dark:text-gray-700">
          <span className="font-semibold">Status : </span> Runtime error
        </div>
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-gray-500 dark:text-gray-300 font-semibold">
            Error
          </h3>
          <div className="w-full max-h-[20rem] overflow-auto text-gray-600 dark:text-gray-300 rounded-md border dark:border-gray-800 p-3 bg-light-dim dark:bg-dark-medium whitespace-pre-line">
            {stderr}
          </div>
        </div>
      </div>
    );
  }

  // =============== code execution is successfull ===================
  return (
    <div className="w-full flex flex-col gap-4 rounded-md border dark:border-gray-800 p-3 bg-white dark:bg-dark-light">
      <div className="w-full py-3 px-4 rounded-md border border-green-200 dark:border-green-600 border-l-[6px] border-l-green-400 dark:border-l-green-500 bg-green-100 dark:bg-green-200 text-gray-700 dark:text-gray-700">
        <span className="font-semibold">Status : </span> Successfully Executed
      </div>
      <div className="w-full flex flex-col gap-2 text-gray-600 dark:text-gray-300">
        <h3 className="text-gray-500 dark:text-gray-300 font-semibold">
          Your Output
        </h3>
        <div className="w-full max-h-[20rem] overflow-auto rounded-md border dark:border-gray-800 p-3 bg-light-dim dark:bg-dark-medium whitespace-pre-line">
          {output}
        </div>
      </div>
    </div>
  );
}
