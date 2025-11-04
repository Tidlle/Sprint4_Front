import Card from '../components/Card'
import { useParams, useNavigate } from 'react-router-dom'
import { INTEGRANTES } from '../data/integrantes'
import { useEffect, useState } from 'react'

export default function IntegranteDetalhe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [integrante, setIntegrante] = useState(() => INTEGRANTES.find(i => i.id === id))

  useEffect(() => {
    if (!integrante) {
      const timer = setTimeout(() => navigate('/integrantes'), 1500)
      return () => clearTimeout(timer)
    }
  }, [integrante, navigate])

  return (
    <Card className="section-eq" title="Detalhe do Integrante">
      {!integrante ? (
        <p className="text-muted">Integrante não encontrado. Redirecionando…</p>
      ) : (
        <div className="grid gap-2">
          <p><strong>Nome:</strong> {integrante.nome}</p>
          <p><strong>RM:</strong> {integrante.rm}</p>
          <p><strong>Turma:</strong> {integrante.turma}</p>
          {integrante.cargo && <p><strong>Função:</strong> {integrante.cargo.toUpperCase()}</p>}
          <button onClick={() => navigate(-1)} className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl border hover:bg-gray-50">
            Voltar
          </button>
        </div>
      )}
    </Card>
  )
}
