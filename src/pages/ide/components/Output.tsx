import { Button } from "@/components/ui/button";
// icons
import { LoadingSpinner } from "@/utils/Icons";

const Output = () => {
  const loading = false;

  /**
   * TSX
   */
  return (
    <div className="flex flex-col">
      <div className="pt-4 pb-4 flex items-center px-4 border-b">
        <Button
          disabled={loading}
          variant="secondary"
          className="py-5 bg-blue-400 hover:bg-blue-500 text-white"
        >
          {loading ? (
            <div className="flex gap-2 items-center">
              <LoadingSpinner className="animate-spin" />
              Please wait
            </div>
          ) : (
            "Run Code"
          )}
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default Output;
