import NavbarClient from '../../components/Client/Navbar/NavbarClient'
import { Outlet } from 'react-router-dom'

const ClientRoot = () => {
  return (
   <>
   <NavbarClient/>
   <Outlet/>
   </>
  )
}

export default ClientRoot