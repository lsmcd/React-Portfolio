import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
