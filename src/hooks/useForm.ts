import { ChangeEvent, useState } from 'react'

type FormState<T> = {
  [K in keyof T]: T[K]
}

type FormErrors<T> = {
  [K in keyof T]?: string | null
}
export const useForm = <T>(initialState: FormState<T>, validate: (values: FormState<T>) => FormErrors<T>) => {
  const [formState, setFormState] = useState<FormState<T>>(initialState)
  const [errors, setErrors] = useState<FormErrors<T>>({})

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate({ ...formState, [name]: value })[name as keyof T],
    }))
  }

  const handleSubmit = (onSubmit: () => void) => {
    const validationErrors = validate(formState)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).every((key) => validationErrors[key as keyof T] === null)) {
      onSubmit()
    }
  }

  return {
    formState,
    errors,
    handleInputChange,
    handleSubmit,
  }
}