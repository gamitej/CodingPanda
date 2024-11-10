// components
import { Dropdown } from "@/components";
// shadcn-ui
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// data
import {
  difficultyModeOptions,
  sqlTopicsOptions,
} from "@/data/question/question.data";

const Header = () => {
  /**
   * TSX
   */
  return (
    <div className="h-[5.5rem] px-6 flex justify-between items-center">
      <div className="flex flex-col gap-3">
        <Label className="text-gray-700 dark:text-gray-300">Question :</Label>
        <Input
          className="dark:bg-dark-light dark:border-gray-800 focus:outline-none focus:ring-0 focus:border-none py-1 w-[50rem]"
          placeholder="write question name here..."
          type="text"
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col gap-3">
          <Label className="text-gray-700 dark:text-gray-300">
            Difficulty :
          </Label>
          <Dropdown
            name=""
            label="difficulty"
            className="w-[8rem]"
            options={difficultyModeOptions}
            setDropdownChange={() => {}}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-gray-700 dark:text-gray-300">
            Select Sql Topic :
          </Label>
          <Dropdown
            name=""
            className="w-[10rem]"
            label="select topics..."
            options={sqlTopicsOptions}
            setDropdownChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
