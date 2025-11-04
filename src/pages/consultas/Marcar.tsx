import { useForm } from 'react-hook-form'
import { criarConsulta } from '../../services/api'

type Form = {
  especialidade: string
  data: string
  hora: string
  observacoes?: string
}

export default function Marcar() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<Form>()

  const onSubmit = async (data: Form) => {
    const payload = {
      pacienteId: 1, 
      medicoId: 1,   
      data: data.data,
      hora: data.hora,
      observacoes: data.observacoes || '',
    }

    const r = await criarConsulta(payload)
  if (r.ok) {
    alert(`Consulta solicitada com sucesso!\nData: ${data.data}\nHora: ${data.hora}\nEsp: ${data.especialidade}`)
  } else {
    alert(`Erro ao solicitar consulta.\nStatus: ${r.status}\nDetalhes: ${r.errorText ?? '(sem body)'}`)
    console.error('Falha ao criar consulta:', { status: r.status, error: r.errorText })
  }
}

  return (
    <div className="container-app">
      <form onSubmit={handleSubmit(onSubmit)} className="card-white bg-[#17A2A8] max-w-xl mx-auto p-5 grid gap-4">
        <h2 className="font-semibold text-white drop-shadow-sm">Marcar uma Consulta</h2>

        <label className="block">
          <span className="text-sm text-white">Especialidade</span>
          <select className="text-[#17A2A8] mt-1 w-full rounded-lg border p-2 bg-white" {...register('especialidade', { required: true })}>
            <option>Clínico geral</option>
            <option>Pediatria</option>
            <option>Dermatologia</option>
          </select>
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm text-white">Data</span>
            <input type="date" className="text-[#17A2A8] mt-1 w-full rounded-lg border p-2 bg-white" {...register('data', { required: true })} />
          </label>
          <label className="block">
            <span className="text-sm text-white">Hora</span>
            <input type="time" className="text-[#17A2A8] mt-1 w-full rounded-lg border p-2 bg-white" {...register('hora', { required: true })} />
          </label>
        </div>

        <label className="block">
          <span className="text-sm text-white">Observações</span>
          <textarea className="text-[#17A2A8] mt-1 w-full rounded-lg border p-2 bg-white" rows={4} {...register('observacoes')} />
        </label>

        <div>
          <button type="submit" disabled={isSubmitting} className="bg-brand text-white px-6 py-2 rounded-lg">
            {isSubmitting ? 'Enviando…' : 'Confirmar'}
          </button>
        </div>
      </form>
    </div>
  )
}
