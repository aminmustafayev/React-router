import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor:"green"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
          <Button color="inherit">
            <Link to={"/admin"}>Dashboard</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/addcountry"}>Add Country</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/countriesadmin"}>Countries Admin</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/detailadmin"}>Detail Admin </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
   </>
  )
}

export default Navbar