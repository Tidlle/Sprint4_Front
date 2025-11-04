import { MenuButton } from '../components/MenuButton'

export default function Home() {
  return (
    <div className="grid gap-8">
      <div className="text-center mt-2">
        <h1 className="text-2xl md:text-3xl font-semibold text-hero">Bem vindo ao App HC!</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <MenuButton to="/consultas/marcar" label="Marcar uma Consulta" emoji="➕" />
        <MenuButton to="/consultas"        label="Ver Minhas Consultas" emoji="📅" />
        <MenuButton to="/chat"          label="Chat HC"               emoji="💬" />
        <MenuButton to="/faq"              label="Perguntas frequentes"  emoji="❓" /><div className="sm:col-span-2 flex justify-center">
        <MenuButton to="/sobre"            label="Quem Somos"            emoji="👥" className="w-full sm:w-[70%]" />
        </div>
      </div>
    </div>
  )
}
