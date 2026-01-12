import { useState } from 'react'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import EmailGenerator from './components/EmailGenerator'
import Examples from './components/Examples'
import './style.css'

function App() {
  const [page, setPage] = useState('landing')
  const [isPremium, setIsPremium] = useState(false)

  const renderPage = () => {
    switch(page) {
      case 'landing': return <LandingPage setPage={setPage} />
      case 'generator': return <EmailGenerator setPage={setPage} isPremium={isPremium} />
      case 'examples': return <Examples setPage={setPage} />
      default: return <LandingPage setPage={setPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header page={page} setPage={setPage} isPremium={isPremium} setIsPremium={setIsPremium} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
