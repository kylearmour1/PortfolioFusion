import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './Header.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Button
            component={Link}
            to="/about"
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'whitesmoke',
              '&:hover': {
                backgroundColor: 'darkgrey',
              },
            }}
          >
            About Me
          </Button>
        </li>
        <li>
          <Button
            component={Link}
            to="/portfolio"
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'whitesmoke',
              '&:hover': {
                backgroundColor: 'darkgrey',
              },
            }}
          >
            Portfolio
          </Button>
        </li>
        <li>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'whitesmoke',
              '&:hover': {
                backgroundColor: 'darkgrey',
              },
            }}
          >
            Contact
          </Button>
        </li>
        <li>
          <Button
            component={Link}
            to="/resume"
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'whitesmoke',
              '&:hover': {
                backgroundColor: 'darkgrey',
              },
            }}
          >
            Resume
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;



