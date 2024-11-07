import { Dropdown } from "@/components/fields/Dropdown";
import {
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
// data & type
import { editorBodyContent } from "@/data/editor.data";
import { FontTypes, TabSizeType, ThemeTypes } from "../type";

const EditorSettingBody = () => {
  /**
   * TSX
   */
  return (
    <DialogContent className="w-full max-w-[90vw] sm:max-w-[425px] md:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Editor Settings</DialogTitle>
      </DialogHeader>

      <div className="flex flex-col gap-4">
        {editorBodyContent.map(({ label, desc, dropdownData, type }, idx) => {
          // Define your types as a union of literal types
          type DropdownType = "tab" | "theme" | "font";

          // Map the literal types to the actual TypeScript types
          type TypeMapping<T extends DropdownType> = T extends "tab"
            ? TabSizeType
            : T extends "theme"
            ? ThemeTypes
            : FontTypes;

          return (
            <div
              key={`${label}-${idx}`}
              className="flex justify-between items-center"
            >
              <div>
                <Label>{label}</Label>
                <DialogDescription>{desc}</DialogDescription>
              </div>
              <div>
                <Dropdown<TypeMapping<typeof type>>
                  name={dropdownData.name}
                  label={dropdownData.label}
                  setDropdownChange={() => {}}
                  options={dropdownData.options}
                  className="w-[5rem] sm:w-[6rem] md:w-[8rem] focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          );
        })}
      </div>
    </DialogContent>
  );
};

export default EditorSettingBody;
