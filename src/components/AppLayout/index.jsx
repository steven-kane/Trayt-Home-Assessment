import * as React from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function AppLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Container
        maxWidth="sm"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        {children}
      </Container>
    </Box>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
