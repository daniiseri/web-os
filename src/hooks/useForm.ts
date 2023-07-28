import { ChangeEvent, useState } from "react";

export function useForm<T>(initialValues: any) {
  const [values, setValues] = useState<T>(initialValues)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const key = e.target.name
    const value = e.target.value

    setValues({ ...values, [key]: value })
  }

  return {
    values,
    setValues,
    handleChange
  }
}