import { Loader2, LucideProps, FileDown } from "lucide-react";

import { LuCode2 } from "react-icons/lu";
import { IconType } from "react-icons/lib";
import { CiSettings } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

// react icons
const Icons: Record<string, IconType> = {
  Code: LuCode2,
  Setting: CiSettings,
  ArrowDown: IoIosArrowDown,
};

// lucide icons
const LucideIcons: Record<
  string,
  React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >
> = {
  LoadingSpinner: Loader2,
  FileDownload: FileDown,
};

const CodeIcon = Icons.Code;
const SettingIcon = Icons.Setting;
const ArrowDownIcon = Icons.ArrowDown;

const LoadingSpinner = LucideIcons.LoadingSpinner;
const FileDownloadIcon = LucideIcons.FileDownload;

export {
  ArrowDownIcon,
  CodeIcon,
  FileDownloadIcon,
  SettingIcon,
  LoadingSpinner,
};
