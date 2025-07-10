import { 
  Container, 
  Typography, 
  styled,
  Grid,
  Paper,
  Alert,
  Snackbar
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { useState } from "react";

const Contact = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  const StyledContact = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0),
  }));

  const ContactCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows[4],
    }
  }));

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Email',
      info: 'hiagocavalcante03@gmail.com',
      link: 'mailto:hiagocavalcante03@gmail.com'
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Whatsapp',
      info: '+55 (62) 98262-6785',
      link: 'https://wa.me/5562982626785'
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Localização',
      info: 'Goiânia, GO',
      link: 'https://www.google.com/maps/place/Goi%C3%A2nia,+GO'
    }
  ];

  return (
    <StyledContact id="contact">
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          textAlign="center" 
          mb={4} 
          color="primary"
          sx={{ fontWeight: 'bold' }}
        >
          Entre em Contato
        </Typography>
        <Typography 
          variant="h6" 
          textAlign="center" 
          mb={6} 
          color="text.secondary"
          sx={{ maxWidth: '600px', margin: '0 auto 48px' }}
        >
          Tem algum projeto em mente? Vamos conversar sobre como posso ajudar!
        </Typography>

        <Grid container spacing={4} mb={6}>
          {contactInfo.map((contact, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ContactCard>
                {contact.icon}
                <Typography variant="h6" color="primary" mt={2} mb={1}>
                  {contact.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  component="a"
                  href={contact.link}
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  {contact.info}
                </Typography>
              </ContactCard>
            </Grid>
          ))}
        </Grid>

        
        
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </StyledContact>
  );
};

export default Contact;
