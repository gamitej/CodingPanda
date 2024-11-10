import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import { Dropdown } from "@/components";
// shadcn-ui
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// data & type
import {
  SqlQuestionType,
  QuestionSetupType,
  CodingQuestionType,
} from "@/redux/admin/type";
import {
  typeOptions,
  sqlTopicsOptions,
  codingTopicsOptions,
  difficultyModeOptions,
} from "@/data/question/question.data";
// redux
import {
  setQuestionType,
  getQuestionStateData,
  setQuestionStateOptions,
} from "@/redux/admin/questionSetupSlice";
import { Button } from "@/components/ui/button";
import { EyeScanIcon } from "@/utils/Icons";

const Header = () => {
  const dispatch = useDispatch();
  const stateData = useSelector(getQuestionStateData);

  const handleQuestionSetupChange = (props: Partial<QuestionSetupType>) => {
    dispatch(setQuestionStateOptions(props));
  };

  /**
   * TSX
   */
  return (
    <div className="h-[5.5rem] px-6 flex justify-between items-center">
      <div className="flex flex-col gap-3">
        <Label className="text-gray-700 dark:text-gray-300">Title :</Label>
        <Input
          type="text"
          className="dark:bg-dark-light dark:border-gray-800 focus:outline-none focus:ring-0 focus:border-none py-1 w-[50rem]"
          placeholder="enter question title..."
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <LanguagetypeAndTopicDropDown />
        <div className="flex flex-col gap-3">
          <Label className="text-gray-700 dark:text-gray-300">
            Difficulty :
          </Label>
          <Dropdown
            name=""
            label="difficulty"
            className="w-[8rem]"
            options={difficultyModeOptions}
            value={stateData.difficultyMode}
            setDropdownChange={(value) =>
              handleQuestionSetupChange({ difficultyMode: value })
            }
          />
        </div>
        <div>
          <Button className="bg-gray-600 p-6">
            <EyeScanIcon />
            Preview
          </Button>
        </div>
      </div>
    </div>
  );
};

function LanguagetypeAndTopicDropDown() {
  const dispatch = useDispatch();

  const stateData = useSelector(getQuestionStateData);

  const handleTypeChange = (
    props: Partial<SqlQuestionType | CodingQuestionType>
  ) => {
    if (stateData.type === "sql") {
      const data = { type: stateData.type } as SqlQuestionType;
      dispatch(setQuestionType({ ...props, ...data }));
    }
    const data = { type: stateData.type } as CodingQuestionType;
    dispatch(setQuestionType({ ...props, ...data }));
  };

  const langOptions = useMemo(() => {
    return stateData.type === "sql" ? sqlTopicsOptions : codingTopicsOptions;
  }, [stateData.type]);

  /**
   * TSX
   */
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex flex-col gap-3">
        <Label className="text-gray-700 dark:text-gray-300">
          Select Type :
        </Label>
        <Dropdown
          name=""
          className="w-[6rem]"
          options={typeOptions}
          label="select topics..."
          value={stateData.type}
          setDropdownChange={(value) => {
            if (value === "sql")
              dispatch(
                setQuestionType({
                  type: value,
                  topics: undefined,
                })
              );
            dispatch(
              setQuestionType({
                type: value,
                topics: undefined,
              } as CodingQuestionType)
            );
          }}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label className="text-gray-700 dark:text-gray-300">
          Select {stateData.type} topic :
        </Label>
        <Dropdown
          name=""
          className="w-[10rem]"
          options={langOptions}
          label="select topics..."
          value={stateData.topics ?? undefined}
          setDropdownChange={(value) => handleTypeChange({ topics: value })}
        />
      </div>
    </div>
  );
}

export default Header;
