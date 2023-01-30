import { UserProfile } from '@auth0/nextjs-auth0/client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

interface PageLink {
    display?: string
    href?: string
    auth?: boolean
    userlink?: boolean //indicates the link should appear from the avatar
    divider: boolean
}

interface HeaderProps {
    user?: UserProfile
    isLoading?: boolean
    links?: PageLink[]
}

export default function ResponsiveAppBar({ user, isLoading, links }: HeaderProps) {
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
                            {links?.map((link) => {
                                if (link.userlink || (link.auth && !user)) return (<></>)
                                return (
                                    <MenuItem component="a" key={link.href} href={link.href} onClick={handleCloseNavMenu}>
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
                        {links?.map((link) => {
                            if (link.userlink || (link.auth && !user)) return (<></>)
                            return (<Button
                                key={link.href}
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
                                        <Avatar alt={user?.name} src={user?.picture} />
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
                                    {links?.map((link) => {
                                        if (link.divider) return (<Divider />)
                                        if (!link.userlink) return (<></>)
                                        return (<MenuItem component="a" href={link.href} key={link.href} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{link.display}</Typography>
                                        </MenuItem>)
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
