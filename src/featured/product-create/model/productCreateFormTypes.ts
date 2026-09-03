import { ChangeEvent } from "react";

export interface ProductCreateFieldProps {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  classParent?: string;
  value: string | number;
  name: string;
  type?: 'text' | 'number';
}

