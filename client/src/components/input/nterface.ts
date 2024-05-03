export interface InputVariantProps {
  label: string;
  placeholder: string;
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
}