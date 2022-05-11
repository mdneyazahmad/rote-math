import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
          <Container maxWidth="md" style={{paddingLeft: 0, paddingRight: 0}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Rote Math
                </Typography>
                <Button component={Link} to="/" color="inherit">Home</Button>
                <Button component={Link} to="/play" color="inherit">Play</Button>
                </Toolbar>
            </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
