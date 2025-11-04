import { ReactNode } from 'react'

type CardProps = { title?: string; children: ReactNode; actions?: ReactNode; className?: string }

export default function Card({ title, children, actions, className = '' }: CardProps) {
  return (
    <section className={`bg-card rounded-2xl shadow-soft border p-5 ${className}`}>
      {title && <h2 className="text-lg font-semibold mb-3">{title}</h2>}
      <div>{children}</div>
      {actions && <div className="mt-4">{actions}</div>}
    </section>
  )
}
