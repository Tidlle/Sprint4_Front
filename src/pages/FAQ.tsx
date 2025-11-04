import Card from '../components/Card'
import { useState } from 'react'

const faqs = [
  { q: 'Como agendar uma consulta?', a: 'Use a pagina Contato para enviar seus dados e preferencia de horario.' },
  { q: 'Posso editar meus dados depois?', a: 'Sim, futuramente no modulo de Perfil (Sprint posterior).' },
  { q: 'Qual API sera usada?', a: 'Na Sprint 4, a API Java sera integrada; por enquanto, usamos mocks.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <Card className="section-eq" title="FAQ">
      <div className="divide-y">
        {faqs.map((item, idx) => (
          <details key={idx} open={open === idx} onToggle={(e) => setOpen(e.currentTarget.open ? idx : null)} className="py-3">
            <summary className="cursor-pointer font-medium">{item.q}</summary>
            <p className="mt-2 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Card>
  )
}
