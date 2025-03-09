import * as React from 'react';
import { useState } from 'react';
import logo from '../assets/library-logo.jpg';
import { Menu, MenuItem, IconButton, Divider } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Navigation pages & settings
const pages = ['Home Page', 'Best Sellers', 'Categories'];
const settings = ['Profile', 'Cart', 'Logout'];

const Navbar = () => {
  // State for menu handling
  // const [anchorElNav, setAnchorElNav] = useState(null); // mobile menu
  const [anchorElUser, setAnchorElUser] = useState(null); // profile menu

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar>
      <Toolbar variant='dense' sx={{ background: "#A27B5C", display: "flex", justifyContent: "left", alignItems: "center" }}>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <img src={logo} width="25px" sx={{ background: "white" }} style={{ marginRight: "8px" }} />
          <Typography sx={{ fontFamily: "Times New Roman, serif", marginRight: "16px" }}>
            My Library
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
          {pages.map((page) => (
            <Button key={page} size='small'
              sx={{
                display: "flex",
                color: "white",
                fontFamily: "Times New Roman, serif",
                pt: "8px",
                px: "8px",
                fontSize: "10px",
                background: "none"
              }}>
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }} >
          <IconButton onClick={handleOpenUserMenu} size="small" sx={{ color: "white" }}>
            <AccountCircleIcon fontSize='small' />
          </IconButton>
          <Menu
            sx={{ marginTop: "25px"}}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting, index) => (
              <React.Fragment key={setting}>
                <MenuItem onClick={handleCloseUserMenu} sx={{ p: "0px 10px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid white", borderRadius: "4px", margin: "4px 0" }}>
                  <Typography sx={{ textAlign: 'center', fontSize: "10px" }}>{setting}</Typography>
                </MenuItem>
                {index < settings.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;