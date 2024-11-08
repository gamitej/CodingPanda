import { Button } from "@/components/ui/button";
// icons
import { LoadingSpinner } from "@/utils/Icons";
import OutputBox from "./OutputBox";

const Output = () => {
  const isLoading = false;

  const output = {
    output: "0\n1\n2\n3\n4\n",
    time: "0.0100",
    memory: "8208",
    stderr:
      '  File "/mnt/sol.py", line 3\n    for i in range(5:\n                    ^\nSyntaxError: invalid syntax\n',
  };

  /**
   * TSX
   */
  return (
    <div className="flex flex-col">
      <div className="pt-4 pb-4 flex items-center px-4 border-b dark:border-gray-800">
        <Button
          disabled={isLoading}
          variant="secondary"
          className="py-5 bg-blue-500 hover:bg-blue-400 text-white dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          {isLoading ? (
            <div className="flex gap-2 items-center">
              <LoadingSpinner className="animate-spin" />
              Please wait
            </div>
          ) : (
            "Run Code"
          )}
        </Button>
      </div>
      <div className="px-3 py-4">
        <OutputBox isLoading={isLoading} {...output} />
      </div>
    </div>
  );
};

export default Output;
