import { useState } from 'react'
import { useRouter } from '@hooks/useRouter'
import Navbar from '@components/Navbar'
import Home from '@pages/Home'
import Menu from '@pages/Menu'
import Contact from '@pages/Contact'
import '@styles/global.css'

export default function App() {
  const { currentRoute, navigate } = useRouter('/')
  const [cart, setCart] = useState([])

  const handleAdd = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id)
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0)

  const renderPage = () => {
    if (currentRoute === '/')        return <Home onAdd={handleAdd} navigate={navigate} />
    if (currentRoute === '/menu')    return <Menu onAdd={handleAdd} />
    if (currentRoute === '/contact') return <Contact />
    return <Home onAdd={handleAdd} navigate={navigate} />
  }

  return (
    <div>
      <Navbar currentRoute={currentRoute} navigate={navigate} />

      {/* Cart indicator */}
      {totalItems > 0 && (
        <div style={{
          background: '#1a1a1a',
          borderBottom: '1px solid #2e2e2e',
          padding: '8px 32px',
          fontSize: '14px',
          fontWeight: '700',
          color: '#e84118'
        }}>
          🛒 Coș: {totalItems} {totalItems === 1 ? 'produs' : 'produse'}
        </div>
      )}

      {renderPage()}
    </div>
  )
}
