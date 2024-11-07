import { useDispatch, useSelector } from "react-redux";
// components
import { Dropdown } from "../fields/Dropdown";
// data & type
import { codingOptions, sqlOptions } from "@/data/editor.data";
import { CodingLanguageTypes, SqlLanguageTypes } from "../editor/type";
// redux
import {
  getCodingLang,
  getSqlLang,
  setCodingLanguage,
  setSqlLanguage,
} from "@/redux/editor/editorSlice";

export const CodingLangDropdown = () => {
  const dispatch = useDispatch();

  const codingLang = useSelector(getCodingLang);

  const handleChange = (val: CodingLanguageTypes) => {
    dispatch(setCodingLanguage(val));
  };

  /**
   * TSX
   */
  return (
    <Dropdown<CodingLanguageTypes>
      name="languages"
      value={codingLang}
      className="w-[150px] focus:ring-blue-400 focus:ring-2"
      label="select language"
      options={codingOptions}
      setDropdownChange={handleChange}
    />
  );
};

export const SqlLangDropdown = () => {
  const dispatch = useDispatch();

  const sqlLang = useSelector(getSqlLang);

  const handleChange = (val: SqlLanguageTypes) => {
    dispatch(setSqlLanguage(val));
  };

  /**
   * TSX
   */
  return (
    <Dropdown<SqlLanguageTypes>
      name="languages"
      value={sqlLang}
      className="w-[150px]"
      options={sqlOptions}
      label="select language"
      setDropdownChange={handleChange}
    />
  );
};
