// // Header.js
// import React from 'react';
// import Navigation from './Navigation';
// import './Header.css'; // Import the Header.css file

// function Header() {
//     return (
//         <header>
//             <h1>Kyle Armour</h1>
//             <Navigation />
//         </header>
//     );
// }

// export default Header;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox'; // Use icons as needed
import MailIcon from '@mui/icons-material/Mail'; // Use icons as needed
import './Header.css'; // Keep your styling

function Header() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Kyle Armour
                    </Typography>
                    <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
                <List>
                    {/* Customize with your own links */}
                    <ListItem button component={Link} to="/about">
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="About Me" />
                    </ListItem>
                    {/* Add more list items for other navigation links */}
                </List>
            </Drawer>
        </div>
    );
}

export default Header;
