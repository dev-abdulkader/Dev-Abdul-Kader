"use client";

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";

interface Option {
  value: string | number;
  label: string;
}

interface FormSelectProps {
  name: string;
  value?: string | string[] | undefined;
  id?: string;
  options: Option[];
  label?: string;
  validation?: object;
  required?: boolean;
  className?: string;
}

const FormSelect = ({
  name,
  value,
  id,
  options,
  label,
  validation,
  required,
  className,
}: FormSelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className={`flex flex-col mb-4`}>
      {/* {label && (
        <label className="mb-2 font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )} */}
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const fieldValue = value !== undefined ? value : field.value || ""; // Ensure fieldValue is never undefined
          return (
            <select
              {...field}
              value={fieldValue}
              required={required}
              className={`py-2 ${className}`}
            >
              <option value="" disabled>
                Select an option
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          );
        }}
      />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};

export default FormSelect;
