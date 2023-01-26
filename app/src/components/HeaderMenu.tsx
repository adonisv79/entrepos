import { UserProfile } from '@auth0/nextjs-auth0/client'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Link from 'next/link'
import * as React from 'react';

interface HeaderProps {
    user?: UserProfile
    isLoading: boolean
}

export default function HeaderMenu({user, isLoading}: HeaderProps) {
    return (<>{ isLoading ? <>Loading...</> : <MenuOptions user={user} isLoading={isLoading} /> }</>)
}

function MenuOptions({ user, isLoading }: HeaderProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    function handleClick(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    };
    function handleClose() {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box id="header-menu" sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ minWidth: 100 }}>
                    <Link href="/" legacyBehavior><a><HomeOutlinedIcon /> Home</a></Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>
                    <Link href="/about" legacyBehavior><a>About</a></Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>
                    <Link href="/users" legacyBehavior><a>Users List</a></Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>
                    <Link href="/api/users" legacyBehavior><a>Users API</a></Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>
                    <Link href="/advanced/api-profile" legacyBehavior>API rendered profile (advanced)</Link>
                </Typography>
                {!isLoading && (user ? (
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }} alt={user?.name} src={user?.picture} />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Button variant='contained' href='/api/auth/login'>Login</Button>
                ))}
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem component="a" href="/profile" onClick={handleClose}>
                    <Avatar alt={user?.name} src={user?.picture} /> Profile
                </MenuItem>
                <MenuItem component="a" href="/advanced/ssr-profile" onClick={handleClose}>
                    <Avatar alt={user?.name} src={user?.picture} /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem component="a" onClick={handleClose} href='/api/auth/logout'>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}