import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Code by Hiago
        </Typography>
        <Box>
          <Button color="primary">Sobre Mim</Button>
          <Button color="primary" sx={{ fontWeight: 500 }}>
            Skills
          </Button>
          <Button color="primary" sx={{ fontWeight: 500 }}>
            Projetos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
