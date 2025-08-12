import './App.css'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Gemini AI Chatbot</h1>
        <p>Powered by Google Gemini AI</p>
      </div>
      <Chatbot />
    </div>
  )
}

export default App
