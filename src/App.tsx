import { Suspense, useState } from "react"
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import Technologies from "./Components/Technologies"
import Footer from "./Components/footer"
import type { iTechnology } from "./Type/Technologies"


function App() {
  const [cart, setCart] = useState<iTechnology[]>([]);

  const technologiesFetch = async () => {
    const response =await fetch("./Technologies.json")
    const data = await response.json()
    return data
  }
  const [technologiesPromise] = useState(() =>technologiesFetch());

  return (
    <div>

      <Suspense>
          <Navbar />
      </Suspense>

      <Suspense>
        <Banner />
      </Suspense>

        <Suspense fallback={<div className="text-xl font-semibold text-center">Loading Technologies...</div>}>
        <Technologies technologiesPromise={technologiesPromise} cart={cart} setCart={setCart}/>
      </Suspense>

      <Suspense>
        <Footer />
      </Suspense>

    </div>

  )
}

export default App
