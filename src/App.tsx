import { Header } from './components/Header'
import { NavBottom } from './components/NavBottom'
import { AppRoutes } from './routes/AppRoutes'

export default function App() {
  return (
    <div className="min-h-screen bg-app flex flex-col">
      <Header />
      {/* espaço para o nav fixo */}
      <main className="flex-1 container-app py-6 pb-28 sm:pb-24 relative">
        <AppRoutes />
      </main>
      <NavBottom />
    </div>
  )
}
