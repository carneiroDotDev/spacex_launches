import { useEffect } from "react"
import "./App.css"

function App() {
  //StrictMode renders components twice (on dev but not production)
  //in order to detect any problems with your code and warn you about
  //them (which can be quite useful).

  useEffect(() => {
    fetch("http://localhost:8888?singleYear=1&year=2017&limit=5")
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
