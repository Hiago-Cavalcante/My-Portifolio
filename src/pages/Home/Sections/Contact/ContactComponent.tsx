import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  styled,
  Grid,
  Paper,
  Alert,
  Snackbar
} from "@mui/material";
import { Email, Phone, LocationOn, Send } from "@mui/icons-material";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Configure seu EmailJS aqui
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
      
      // Simulando envio por enquanto
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSnackbar({
        open: true,
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
        severity: 'success'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Erro ao enviar mensagem. Tente novamente.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

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
      link: 'hiagocavalcante03@gmail.com'
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
      link: '#'
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

        <Box maxWidth="md" mx="auto">
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" textAlign="center" mb={3} color="primary">
              Envie uma Mensagem
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField 
                    label="Nome Completo" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth 
                    required 
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField 
                    label="Email" 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth 
                    required 
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    label="Mensagem" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline 
                    rows={6} 
                    fullWidth 
                    required 
                    variant="outlined"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                  />
                </Grid>
                <Grid item xs={12}>                  <Box textAlign="center">
                    <Button 
                      type="submit"
                      variant="contained" 
                      color="primary" 
                      size="large"
                      startIcon={<Send />}
                      disabled={loading}
                      sx={{ 
                        px: 4, 
                        py: 1.5,
                        fontSize: '1.1rem'
                      }}
                    >
                      {loading ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
        
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
