import { useDispatch, useSelector } from "react-redux";
// components
import { Dropdown } from "../fields/Dropdown";
// data & type
import { codingOptions, sqlLanguageOptions } from "@/data/editor.data";
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
      label="select language"
      options={codingOptions}
      setDropdownChange={handleChange}
      className="w-[150px] focus:ring-gray-200 focus:ring-2"
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
      label="select language"
      options={sqlLanguageOptions}
      setDropdownChange={handleChange}
      className="w-[150px] focus:ring-gray-200 focus:ring-2"
    />
  );
};
