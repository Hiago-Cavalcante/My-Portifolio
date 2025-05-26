import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Divider,
  styled 
} from "@mui/material";
import { 
  GitHub, 
  LinkedIn, 
  Email, 
  Twitter,
  FavoriteRounded 
} from "@mui/icons-material";

const Footer = () => {  const StyledFooter = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6, 0, 3),
    marginTop: 'auto',
  }));

  const socialLinks = [
    {
      icon: <GitHub />,
      url: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <LinkedIn />,
      url: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Email />,
      url: "mailto:hiago@exemplo.com",
      label: "Email"
    },
    {
      icon: <Twitter />,
      url: "https://twitter.com",
      label: "Twitter"
    }
  ];

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={4}>
          <Typography variant="h6" color="primary" gutterBottom>
            Hiago Cavalcante
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Desenvolvedor Frontend apaixonado por criar experiências digitais incríveis
          </Typography>
          
          <Box display="flex" justifyContent="center" gap={1} mb={3}>
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                sx={{
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
                aria-label={social.label}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
        
        <Divider sx={{ mb: 3 }} />
        
        <Box 
          display="flex" 
          justifyContent="center" 
          alignItems="center"
          flexWrap="wrap"
          gap={1}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Feito 
          </Typography>
        
          <Typography variant="body2" color="text.secondary">
            por Hiago Cavalcante
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
