import { useDispatch } from "react-redux";
// components
import { Dropdown } from "../fields/Dropdown";
// data & type
import { codingOptions, sqlOptions } from "@/data/editor.data";
import { CodingLanguageTypes, SqlLanguageTypes } from "../editor/type";
// redux
import { setCodingLanguage, setSqlLanguage } from "@/redux/editor/editorSlice";

export const CodingLangDropdown = () => {
  const dispatch = useDispatch();

  const handleChange = (val: CodingLanguageTypes) => {
    dispatch(setCodingLanguage(val));
  };

  /**
   * TSX
   */
  return (
    <Dropdown<CodingLanguageTypes>
      name="languages"
      className="w-[150px]"
      label="select language"
      options={codingOptions}
      setDropdownChange={handleChange}
    />
  );
};

export const SqlLangDropdown = () => {
  const dispatch = useDispatch();

  const handleChange = (val: SqlLanguageTypes) => {
    dispatch(setSqlLanguage(val));
  };

  /**
   * TSX
   */
  return (
    <Dropdown<SqlLanguageTypes>
      name="languages"
      className="w-[150px]"
      options={sqlOptions}
      label="select language"
      setDropdownChange={handleChange}
    />
  );
};
