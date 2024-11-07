import { LuCode2 } from "react-icons/lu";
import { IconType } from "react-icons/lib";
import { IoIosArrowDown } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

const Icons: Record<string, IconType> = {
  Code: LuCode2,
  ArrowDown: IoIosArrowDown,
  Setting: CiSettings,
};

const CodeIcon = Icons.Code;
const SettingIcon = Icons.Setting;
const ArrowDownIcon = Icons.ArrowDown;

export { ArrowDownIcon, CodeIcon, SettingIcon };
