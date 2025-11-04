import Card from '../components/Card'
import { INTEGRANTES } from '../data/integrantes'
import { Link } from 'react-router-dom'

export default function Sobre() {
  return (
    <>
    <Card className="section-eq mb-6" title="Integrantes">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INTEGRANTES.map((m) => (
              <Link key={m.id} to={`/integrantes/${m.id}`} className="block p-4 rounded-xl border hover:shadow-soft transition bg-card">
                <p className="font-semibold">{m.nome}</p>
                <p className="text-sm text-muted">RM: {m.rm} · Turma: {m.turma}</p>
                {m.cargo && <p className="text-xs mt-1 text-muted">Função: {m.cargo.toUpperCase()}</p>}
              </Link>
            ))}
          </div>
        </Card>
    
    <div className="grid gap-6">
      <Card className="section-eq" title="Sobre o Projeto">
        <p className="text-muted">
          O APP HC tem como objetivo apoiar o fluxo de atendimento e agendamentos, com cadastro de pacientes,
          integração futura com API Java (Sprint 4) e boas práticas de UX.
        </p>
      </Card>
      <Card className="section-eq" title="Tecnologias">
        <ul className="list-disc pl-5 text-muted space-y-1">
          <li>React + Vite + TypeScript</li>
          <li>TailwindCSS (utilitarios responsivos)</li>
          <li>React Hook Form (validacao de formularios)</li>
          <li>React Router (rotas estaticas e dinamicas)</li>
          <li>fetch nativo para chamadas a API</li>
        </ul>
      </Card>
    </div>
    </>
  )
}
