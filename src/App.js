import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Chat from './pages/Chat'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
