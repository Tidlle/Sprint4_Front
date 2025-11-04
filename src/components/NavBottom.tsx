import { NavLink } from 'react-router-dom'

const cls = ({ isActive }: { isActive: boolean }) =>
  `flex flex-col items-center justify-center text-sm ${isActive ? 'text-white font-semibold' : 'text-white/80'}`

export function NavBottom() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-black/10 backdrop-blur border-t border-white/10">
      <div className="container-app grid grid-cols-3 py-2">
        <NavLink to="/" className={cls}>
          <span className="text-lg">🏠</span>
          <span>Home</span>
        </NavLink>
        <NavLink to="/faq" className={cls}>
          <span className="text-lg">❓</span>
          <span>FAQ</span>
        </NavLink>
        <NavLink to="/contato" className={cls}>
          <span className="text-lg">✉️</span>
          <span>Contato</span>
        </NavLink>
      </div>
    </nav>
  )
}
