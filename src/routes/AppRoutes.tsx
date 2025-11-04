import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import IntegranteDetalhe from '../pages/IntegranteDetalhe'
import Sobre from '../pages/Sobre'
import FAQ from '../pages/FAQ'
import Contato from '../pages/Contato'
import Chat from '../pages/Chat'
import MinhasConsultas from '../pages/consultas/MinhasConsultas'
import Detalhes from '../pages/consultas/Detalhes'
import Marcar from '../pages/consultas/Marcar'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consultas" element={<MinhasConsultas />} />
      <Route path="/consultas/detalhes" element={<Detalhes />} />
      <Route path="/consultas/marcar" element={<Marcar />} />
      <Route path="/integrantes/:id" element={<IntegranteDetalhe />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
