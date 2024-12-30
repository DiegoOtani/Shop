import { IconType } from "react-icons"

export type InputProps = {
  icon: IconType;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: VoidFunction;
}