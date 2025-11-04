import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type Msg = { id: number; author: 'me' | 'bot'; text: string }

export default function Chat() {
  const navigate = useNavigate()
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [text, setText] = useState('')
  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // rola para o final sempre que adicionar mensagem
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [msgs.length])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!text.trim()) return
    const id = Date.now()
    setMsgs((m) => [...m, { id, author: 'me', text }])
    setText('')
    // resposta fictícia só para demonstrar
    setTimeout(() => {
      setMsgs((m) => [...m, { id: id + 1, author: 'bot', text: 'Obrigado! Em breve um atendente responderá.' }])
    }, 500)
  }

  return (
    <div className="container-app">
      <section className="mx-auto w-full max-w-3xl rounded-xl overflow-hidden shadow border bg-[#17a2a8]">
        <div className="flex items-center justify-between mt-4 mb-4">
        <h2 className="font-semibold text-white drop-shadow-sm ml-4 mt-1">Chat HC</h2>
      </div>
        <div className="bg-[#17a2a8] text-white text-center px-4 py-2 font-medium">
          Tire todas as suas dúvidas sobre consultas, medicamentos e planos de saúde
        </div>

        <div ref={listRef} className="h-[420px] md:h-[460px] overflow-y-auto p-4 space-y-3 bg-white">
          {msgs.length === 0 && (
            <p className="text-gray-500 text-sm">Digite sua dúvida abaixo e clique em Enviar.</p>
          )}
          {msgs.map((m) => (
            <div
              key={m.id}
              className={`max-w-[80%] rounded-lg px-3 py-2 ${
                m.author === 'me'
                  ? 'ml-auto bg-[#e8f7f8] border border-[#c6eaee] text-gray-800'
                  : 'mr-auto bg-gray-100 border border-gray-200 text-gray-800'
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="p-4 bg-[#17a2a8] text-black">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Tire dúvidas sobre o HC"
            className="block w-full rounded-md border border-[#1e78b3] focus:outline-none focus:ring-2 focus:ring-[#1e78b3] px-3 py-2"
          />
          <button
            type="submit"
            className="mt-3 w-full bg-brand text-white py-2.5 rounded-lg shadow hover:opacity-95"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  )
}
