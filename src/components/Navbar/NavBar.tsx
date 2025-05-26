import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { 
  Brightness4, 
  Brightness7, 
  Menu as MenuIcon, 
  Close 
} from "@mui/icons-material";
import { useTheme } from "../ThemeProvider";
import { useState } from "react";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false); // Fechar drawer ao navegar
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: 'Sobre Mim', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Contato', id: 'contact' }
  ];
  return (
    <>      <AppBar 
        position="fixed" 
        color="transparent"        sx={{ 
          backdropFilter: 'blur(10px)',
          backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'text.primary' }}>
            Code by Hiago
          </Typography>
          
          {isMobile ? (
            <Box display="flex" alignItems="center">              <IconButton 
                color="primary" 
                onClick={toggleTheme}
                title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
              >
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              <IconButton
                color="primary"
                onClick={handleDrawerToggle}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box display="flex" alignItems="center">
              {menuItems.map((item) => (
                <Button 
                  key={item.id}
                  color="primary" 
                  onClick={() => scrollToSection(item.id)}
                  sx={{ fontWeight: 500, mx: 1 }}
                >
                  {item.label}
                </Button>
              ))}              <IconButton 
                color="primary" 
                onClick={toggleTheme}
                sx={{ ml: 1 }}
                title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
              >
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="primary">
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <Close />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => scrollToSection(item.id)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
