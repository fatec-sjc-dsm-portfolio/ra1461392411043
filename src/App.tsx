import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/Home'
import CursorSticker from './components/CursorSticker'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/:lang?" element={<HomePage />} />
    </Routes>
  )
}

export default function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppRoutes />
      </BrowserRouter>
      <CursorSticker />
    </>
  )
}
