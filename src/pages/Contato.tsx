import Card from '../components/Card'
import { useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import { Textarea } from '../components/Form/Textarea'
import { useNavigate } from 'react-router-dom'

type ContatoForm = {
  nome: string
  email: string
  telefone: string
  mensagem: string
  termos: boolean
}

export default function Contato() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContatoForm>({
    defaultValues: { nome: '', email: '', telefone: '', mensagem: '', termos: false }
  })

  const onSubmit = async (data: ContatoForm) => {
    await new Promise(r => setTimeout(r, 600))
    reset()
    navigate('/?contato=ok')
  }

  return (
    <Card className="section-eq" title="Contato / Agendamento">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Nome completo"
          placeholder="Seu nome"
          register={register('nome', { required: 'Informe seu nome' })}
          error={errors.nome}
        />
        <Input
          label="E-mail"
          type="email"
          placeholder="voce@email.com"
          register={register('email', {
            required: 'Informe seu e-mail',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail invalido' }
          })}
          error={errors.email}
        />
        <Input
          label="Telefone"
          placeholder="(11) 99999-9999"
          register={register('telefone', {
            required: 'Informe seu telefone',
            pattern: { value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
              message: 'Telefone invalido' }
          })}
          error={errors.telefone}
        />
        <div className="sm:col-span-2">
          <Textarea
            label="Mensagem / Preferencia de horario"
            placeholder="Descreva sua necessidade"
            register={register('mensagem', {
              required: 'Informe uma mensagem',
              minLength: { value: 10, message: 'Escreva ao menos 10 caracteres' }
            })}
            error={errors.mensagem}
            rows={5}
          />
        </div>
        <label className="sm:col-span-2 inline-flex items-start gap-2">
          <input type="checkbox" className="mt-1" {...register('termos', { required: 'Voce precisa aceitar os termos' })} />
          <span className="text-sm text-muted">Concordo com os termos de uso e politica de privacidade.</span>
        </label>
        {errors.termos && <span className="text-xs text-red-600 sm:col-span-2">{errors.termos.message}</span>}

        <div className="sm:col-span-2 flex gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center bg-brand text-onBrand px-5 py-2 rounded-xl disabled:opacity-60">
            {isSubmitting ? 'Enviando…' : 'Enviar'}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center border px-5 py-2 rounded-xl hover:bg-gray-50"
            onClick={() => reset()}
          >
            Limpar
          </button>
        </div>
      </form>
    </Card>
  )
}
