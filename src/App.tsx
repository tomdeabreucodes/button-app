import { useState } from 'react'
import './App.css'

function App() {
  const [revealed, setRevealed] = useState(false)

  return (
    <main>
      <button type="button" onClick={() => setRevealed(true)} disabled={revealed}>
        Reveal
      </button>
      {revealed && <p>Secret text</p>}
    </main>
  )
}

export default App
