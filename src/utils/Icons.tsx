import { LuCode2 } from "react-icons/lu";
import { IconType } from "react-icons/lib";
import { IoIosArrowDown } from "react-icons/io";

const Icons: Record<string, IconType> = {
  Code: LuCode2,
  ArrowDown: IoIosArrowDown,
};

const CodeIcon = Icons.Code;
const ArrowDownIcon = Icons.ArrowDown;

export { CodeIcon, ArrowDownIcon };
