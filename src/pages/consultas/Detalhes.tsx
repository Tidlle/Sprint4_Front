import { useEffect, useState } from 'react'
import { listarConsultas, type Consulta } from '../../services/api'

function formatarDataISOparaBR(d: string) {
  const [y,m,day] = d.split('-')
  return `${day}/${m}/${y}`
}

export default function Detalhes() {
  const [consultas, setConsultas] = useState<Consulta[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listarConsultas().then(r => {
      if (r.ok && r.data) setConsultas(r.data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="container-app">
      <div className="text-center mt-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-sm">Detalhes da(s) Consulta(s)</h1>
      </div>

      <div className="max-w-3xl mx-auto grid gap-4">
        {loading && <div className="card-white p-4">Carregando…</div>}
        {!loading && consultas.length === 0 && <div className="card-white p-4">Nenhuma consulta encontrada.</div>}

        {consultas.map((c) => (
          <div key={c.id} className="card-white p-4 grid md:grid-cols-2 gap-3 items-center">
            <div>
              <p className="text-[#17A2A8] font-semibold">{formatarDataISOparaBR(c.data)} · {c.hora}</p>
              <p className="text-muted text-sm">Paciente #{c.pacienteId} · Médico #{c.medicoId}</p>
            </div>
            <div className="text-sm">
              {c.observacoes ? <p className="text-muted">{c.observacoes}</p> : <p className="opacity-60">Sem observações</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
