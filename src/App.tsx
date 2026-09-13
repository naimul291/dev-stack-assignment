import { Suspense } from "react"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <div>

      <Suspense>
          <Navbar />
      </Suspense>

    </div>

  )
}

export default App
