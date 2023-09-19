import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const navItems = ['Sign In', 'En Español', 'Locations', 'Contact Us', 'Help'];

function Navbar() {
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 101 }}
      >
        <Toolbar sx={{ marginLeft: 'auto' }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
