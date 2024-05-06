import Navbar from '../../components/Admin/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const AdminRoot = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default AdminRoot