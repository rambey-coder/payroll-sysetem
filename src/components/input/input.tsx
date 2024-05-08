import React from "react";
import { InputVariantProps } from "./nterface";
import { TextInput, Textarea } from "@mantine/core";
import "./style.scss";

export const TxtInput: React.FC<InputVariantProps> = ({
  label,
  placeholder,
  required,
  leftSection,
  rightSection,
  disabled,
  error,
  onChange,
  value,
  type,
  name,
  id,
}) => (
  <TextInput
    label={label}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    radius="md"
    size="md"
    leftSection={leftSection}
    rightSection={rightSection}
    disabled={disabled}
    error={error}
    type={type}
    name={name}
    id={id}
  />
);

export const TxtArea: React.FC<InputVariantProps> = ({
  label,
  placeholder,
  required,
  disabled,
  error,
  onChange,
  value,
  name,
  id,
}) => (
  <Textarea
    label={label}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    radius="md"
    size="md"
    disabled={disabled}
    error={error}
    autosize
    minRows={4}
    name={name}
    id={id}
  />
);
