import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router'
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import logoHeader from '../../assets/img/logo_header.png'
import './Header.scss'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <AppBar
      position="fixed"
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      elevation={0}
    >
      <Toolbar className="header__nav">
        <Box className="header__logo">
          <a href="/" onClick={handleLogoClick}>
            <img src={logoHeader} alt="logo" loading="lazy" />
          </a>
        </Box>

        {/* Desktop Menu */}
        <Box className="header__menu">
          <Button component={Link} to="/" className="header__menu-link">
            About me
          </Button>
          <Button component={Link} to="/experience" className="header__menu-link">
            Experience
          </Button>
          <Button component={Link} to="/widgets" className="header__menu-link">
            Widgets
          </Button>
          <Button component={Link} to="/contact" className="header__menu-link">
            Contact
          </Button>
        </Box>

        {/* Mobile Menu Toggle */}
        <IconButton
          className="header__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          sx={{ display: { md: 'none' }, color: 'inherit' }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu (Material-UI Drawer) */}
        <Drawer
          anchor="top"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          classes={{ paper: 'header__drawer' }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <List className="header__mobile-menu">
            {['About me', 'Experience', 'Widgets', 'Contact'].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={text === 'About me' ? '/' : `/${text.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="header__menu-link"
                >
                  {text}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

export default Header
