import { ArrowDownIcon } from "@/utils/Icons";
import { FC, useState } from "react";

interface SelectOptionsProps {
  label: string;
  options: string[];
}

const SelectOptions: FC<SelectOptionsProps> = ({ label, options = [] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelectOptions = () => {
    setIsOpen((state) => !state);
  };

  /**
   * TSX
   */
  return (
    <div className="relative select-none">
      <div
        onClick={handleSelectOptions}
        className="flex items-center gap-1 hover:bg-gray-100 py-1 px-3 text-gray-600 rounded-lg w-fit cursor-pointer capitalize"
      >
        {label} <ArrowDownIcon className="text-xl mt-1" />
      </div>

      {isOpen && (
        <div
          role="menu"
          aria-labelledby="dropdown-button"
          className="absolute top-9 z-50 bg-white shadow-md border border-gray-300 rounded-md p-1"
        >
          <div className="w-full py-1 px-1 flex flex-col items-start gap-1">
            {options.map((option) => (
              <p
                key={option}
                role="menuitem"
                className="w-full text-gray-800 hover:bg-gray-100 cursor-pointer rounded-md text-md px-2 py-1 capitalize"
              >
                {option}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectOptions;
