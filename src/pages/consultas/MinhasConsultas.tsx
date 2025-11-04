import { useMemo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { listarConsultas, type Consulta } from '../../services/api'

const WEEK_LABELS = ['DOM','SEG','TER','QUA','QUI','SEX','SÁB']

function buildMonthGrid(year: number, monthIndex: number) {
  const first = new Date(year, monthIndex, 1)
  const startWeekday = first.getDay()
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const cells: { day?: number }[] = []
  for (let i=0;i<startWeekday;i++) cells.push({})
  for (let d=1; d<=daysInMonth; d++) cells.push({ day: d })
  while (cells.length % 7 !== 0) cells.push({})
  return cells
}

export default function MinhasConsultas() {
  const navigate = useNavigate()

  const [ref, setRef] = useState(() => {
    const d = new Date()
    return { y: d.getFullYear(), m: d.getMonth() }
  })

  const [consultas, setConsultas] = useState<Consulta[]>([])

  useEffect(() => {
    listarConsultas().then(r => {
      if (r.ok && r.data) setConsultas(r.data)
    })
  }, [])

  const cells = useMemo(() => buildMonthGrid(ref.y, ref.m), [ref])
  const monthName = new Date(ref.y, ref.m, 1).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })

  const diasComConsulta = useMemo(() => {
    return consultas
      .map(c => new Date(c.data))
      .filter(d => d.getFullYear() === ref.y && d.getMonth() === ref.m)
      .map(d => d.getDate())
  }, [consultas, ref])

  return (
    <div className="container-app bg-[#17A2A8] card-white max-w-xl mx-auto p-5 grid gap-4">
      <div className="flex mt-4 mb-3 gap-20">
        <h2 className="font-semibold text-white drop-shadow-sm ml-4 mt-1">Minhas Consultas</h2>
        <div className="mt-1 flex items-center justify-center gap-3 text-white font-semibold">
          <button aria-label="Anterior" className="btn-teal-badge"
            onClick={() => setRef(({y,m}) => (m===0 ? {y:y-1,m:11} : {y,m:m-1}))}>
            <span>−</span>
          </button>
          <span>{monthName.charAt(0).toUpperCase() + monthName.slice(1)}</span>
          <button aria-label="Próximo" className="btn-teal-badge"
            onClick={() => setRef(({y,m}) => (m===11 ? {y:y+1,m:0} : {y,m:m+1}))}>
            <span>+</span>
          </button>
        </div>
      </div>

      <div className="mx-auto card-white p-3 w-full max-w-md">
        <div className="grid grid-cols-7 gap-2 text-xs font-semibold text-gray-600">
          {WEEK_LABELS.map((w) => <div key={w} className="text-center">{w}</div>)}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-2">
          {cells.map((c, i) => {
            const hasConsulta = c.day && diasComConsulta.includes(c.day)
            return (
              <button
                key={i}
                disabled={!c.day}
                className={`h-10 rounded-md border text-sm transition-all duration-200
                  ${c.day ? 'hover:bg-gray-50' : 'opacity-40 cursor-default'}
                  ${hasConsulta ? 'bg-emerald-400 text-white font-bold shadow' : ''}
                `}
                onClick={() => c.day && navigate('/consultas/detalhes')}
              >
                {c.day ?? ''}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate('/consultas/detalhes')}
          className="bg-brand text-white px-6 py-3 rounded-lg shadow hover:opacity-95"
        >
          Clique aqui para ter mais informações sobre suas consultas
        </button>
      </div>
    </div>
  )
}
