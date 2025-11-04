import { Link } from 'react-router-dom'

type Props = {
  to: string
  label: string
  emoji?: string
  className?: string
}
export function MenuButton({ to, label, emoji = '•', className }: Props) {
  return (
    <Link
      to={to}
      className={`tile rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3 ${className||''}`}
    >
      <span className="text-2xl leading-none select-none">{emoji}</span>
      <span className="text-white text-lg font-medium">{label}</span>
    </Link>
  )
}
