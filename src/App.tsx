import { Suspense } from "react"
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"


function App() {

  return (
    <div>

      <Suspense>
          <Navbar />
      </Suspense>

      <Suspense>
        <Banner />
      </Suspense>

    </div>

  )
}

export default App
