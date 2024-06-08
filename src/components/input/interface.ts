export interface InputVariantProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  disabled?: boolean;
  error?: string;
  type?: string;
  name?: string;
  id?: string;
  [key: string]: any;
}

export interface ISelect {
  label: string;
  placeholder: string;
  data: { value: string; label: string }[];
  defaultValue?: string;
  clearable: boolean;
  onChange?: (value: string | any) => void;
  name: string;
  id?: string;
  required?: boolean;
}
