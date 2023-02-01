import { UserProfile } from '@auth0/nextjs-auth0/client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Settings, Logout } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { SvgIcon } from '@mui/material';

interface PageLink {
    display?: string // the display value
    href?: string // redirect url
    auth?: boolean // appears only if user is authenticated
    divider?: boolean // indicates a divider for the menu
    icon?: typeof SvgIcon // the icon to show
    tooltip?: string // the tootltip to show on hover
}

interface HeaderProps {
    user?: UserProfile
    isLoading?: boolean
}

const navigationLinks: PageLink[] = [
    { display: 'Home', href: '/' },
    { display: 'About', href: '/about' },
    { display: 'Users List', href: '/users' },
    { display: 'API rendered profile', href: '/advanced/api-profile' },
    { display: 'My Enterprises', href: '/app', auth: true, },
]

const userLinks: PageLink[] = [
    { display: 'Profile', href: '/profile', auth: true, icon: Settings },
    { divider: true },
    { display: 'Logout', href: '/api/auth/logout', auth: true, icon: Logout, tooltip: 'dfsd' },
]

export default function ResponsiveAppBar({ user }: HeaderProps) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar id="header-menu2" position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box component="img" src="/logo-s.png" alt="EntrePOS Logo"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                            width: { md: 200 }
                        }}
                    />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {navigationLinks?.map((link, key) => {
                                if (!(link.auth && !user)) return (
                                    <MenuItem component="a" key={key} href={link.href} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{link.display}</Typography>
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                    </Box>
                    <Box component="img" src="/logo-s.png" alt="EntrePOS Logo"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            mr: 2,
                            width: 200,
                        }}
                    />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {navigationLinks?.map((link, key) => {
                            if (!(link.auth && !user)) return (<Button
                                key={key}
                                href={link.href}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {link.display}
                            </Button>)
                        })}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {!user ?
                            (<Button variant="contained" href="/api/auth/login">Login</Button>) :
                            (<>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={user.name?.toString()} src={user.picture?.toString()} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
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
                                    {userLinks?.map((link, key) => {
                                        if (link.divider) return (<Divider key={key} />)
                                        return (
                                            <Tooltip title={link.tooltip || ""} key={key}><MenuItem component="a"
                                                href={link.href} onClick={handleCloseUserMenu}>
                                                {link.icon && (<link.icon />)}
                                                <Typography textAlign="center">{link.display}</Typography>
                                            </MenuItem>
                                            </Tooltip>
                                        )
                                    })}
                                </Menu>
                            </>)
                        }
                    </Box>
                </Toolbar>
            </Container >
        </AppBar >
    );
}
