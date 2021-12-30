import * as React from 'react';
import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HideOnScroll from "./hideAppBar";
// eslint-disable-next-line
import base from '../../base.css'
// eslint-disable-next-line
import theme from '../../sections/NavBar/navBar.css'


function MenuComponent({anchorEl, onClick, onClose, pages}) {
    return <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={onClick}
            color="inherit"
        >
            <MenuIcon/>
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            open={Boolean(anchorEl)}
            onClose={onClose}
            sx={{
                display: {xs: "block", md: "none"},
            }}
        >
            {pages.map((page) => (
                <MenuItem key={page} onClick={onClose}>
                    <Typography
                        fontFamily={"Raleway, serif"} textAlign="center">{page}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </Box>;
}

const ResponsiveHideOnScrollAppBar = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const {pages} = props
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const TITLE = "CODE 101";
    return (
        <>
            <HideOnScroll>
                <AppBar className={"navBar"}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                fontFamily={"Raleway, serif"}
                                // fontSize={"larger"}
                                variant="h2"
                                noWrap
                                component="div"
                                sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                            >
                                {TITLE}
                            </Typography>

                            <MenuComponent onClick={handleOpenNavMenu} anchorEl={anchorElNav}
                                           onClose={handleCloseNavMenu} pages={pages}/>
                            <Typography
                                fontFamily={"Raleway, serif"}
                                noWrap
                                fontSize={"xxx-large"}
                                component="div"
                                sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                            >
                                {TITLE}
                            </Typography>
                            <Box className={"navBarItems"} sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{my: 2, display: 'block'}}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
        </>
    );
};
export default ResponsiveHideOnScrollAppBar;