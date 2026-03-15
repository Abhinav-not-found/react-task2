import { useState } from "react"
import Navbar from "./components/general/navbar"
import Auth from "./pages/auth"
import Product from "./pages/product"

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <div>
      <Navbar setAuth={setAuth} />
      {auth ? <Auth /> : <Product />}
    </div>
  )
}

export default App
