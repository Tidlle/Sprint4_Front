import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  // Fecha ao clicar fora ou apertar ESC
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const t = e.target as Node
      if (open && menuRef.current && !menuRef.current.contains(t) && btnRef.current && !btnRef.current.contains(t)) {
        setOpen(false)
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onEsc)
    }
  }, [open])

  function go(path: string) {
    setOpen(false)
    navigate(path)
  }

  return (
    <header className="py-4 bg-white">
      <div className="container-app relative flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <img
            src="public/logo.png"
            alt="Logo"
            className="w-15 h-12"
            onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}}
          />
        </Link>

        <button
          ref={btnRef}
          className="bg-[#17A2A8] rounded-lg border border-white/70 text-white px-2.5 py-1.5"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="menu-popover"
          onClick={()=>setOpen(v=>!v)}
        >
          ☰
        </button>

        {open && (
          <div
            id="menu-popover"
            ref={menuRef}
            className="absolute right-0 top-14 z-50 w-64 rounded-xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden"
            role="menu"
          >
            <div className=" px-4 py-3 bg-[#1e78b3] text-white font-semibold">
              Menu
            </div>

            <nav className="p-2 grid">
              <button onClick={()=>go('/')}           className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-menu">🏠 Início</button>

              <button onClick={()=>go('/consultas/marcar')} className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-menu">➕ Marcar uma Consulta</button>
              <button onClick={()=>go('/consultas')}        className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-menu">📅 Ver Minhas Consultas</button>
              <button onClick={()=>go('/chat')}    className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-menu">💬 Chat HC</button>
              <button onClick={()=>go('/faq')}        className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-menu">❓ Perguntas Frequentes</button>
              <button onClick={()=>go('/sobre')}      className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-menu">👥 Quem Somos</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
