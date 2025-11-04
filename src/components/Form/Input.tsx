import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

type InputProps = {
  label: string
  type?: string
  placeholder?: string
  register: UseFormRegisterReturn
  error?: FieldError
}

export function Input({ label, type = 'text', placeholder, register, error }: InputProps) {
  return (
    <label className="block">
      <span className="text-sm text-onSurface">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-[var(--brand)]
        ${error ? 'border-red-500 ring-red-200' : 'border-gray-300'}`}
        {...register}
      />
      {error && <span className="text-xs text-red-600">{error.message}</span>}
    </label>
  )
}
