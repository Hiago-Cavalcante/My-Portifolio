import { Container, styled, Typography, Divider, Box } from "@mui/material";
import Avatar from "../../../../assets/Images/image.png";
import LinkedlnButton from "./components/Linkedln";
import GithubButton from "./components/GitHubButton";
import AnimationBackground from "../../../../components/AnimatedBackground";
import { motion } from "framer-motion";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // Para sobreposição correta
    overflow: "hidden",
    [theme.breakpoints.up("xs")]: {
  
    },
  }));
  const StyledImg = styled("img")(({ theme }) => ({
    width: "35%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.main}`,
    zIndex: 1, // Mantém a imagem acima da animação
  }));

  return (
    <StyledHero>
      <AnimationBackground />      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box position="relative" display="flex" justifyContent="center" mb={3}>
              <StyledImg src={Avatar} alt="Avatar" />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h2" color="primary" sx={{ fontWeight: 'bold' }}>
              Hiago Cavalcante
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
              Desenvolvedor de Software Full Stack
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ width: '100%', maxWidth: '1000px' }}
          >
            <Divider sx={{ my: 2, backgroundColor: "primary.main", height: '2px' }} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Box display="flex" justifyContent="center" gap={2}>
              <LinkedlnButton />
              <GithubButton />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </StyledHero>
  );
};

export default Hero;
