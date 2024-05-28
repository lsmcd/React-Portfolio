import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-dark">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
