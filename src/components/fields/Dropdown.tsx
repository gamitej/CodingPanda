import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DropdownProps<T> {
  name: string;
  label: string;
  className?: string;
  value?: T | undefined;
  setDropdownChange: (val: T) => void;
  options: { label: string; value: T }[];
}

export function Dropdown<T extends string>({
  value,
  name = "",
  className,
  options = [],
  label = "select",
  setDropdownChange,
}: DropdownProps<T>) {
  return (
    <Select
      value={value ?? ""}
      onValueChange={(val) => setDropdownChange(val as T)}
    >
      <SelectTrigger
        className={`${className} dark:bg-dark-light dark:border-gray-800 dark:text-gray-300 dark:focus:ring-gray-600 text-gray-700`}
      >
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className="dark:bg-dark-light text-gray-600 dark:text-gray-300">
        <SelectGroup>
          <SelectLabel>{name}</SelectLabel>
          {options.map(({ value, label }, index) => (
            <SelectItem key={`${index}-${label}`} value={value as string}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
