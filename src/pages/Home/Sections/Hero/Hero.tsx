import { Container, styled, Typography, Divider, Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar6.jpg";
import Grid from "@mui/material/Grid2"; // Mantido como Grid2
import LinkedlnButton from "./components/Linkedln";
import GithubButton from "./components/GitHubButton";
import AnimationBackground from "../../../../components/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // Para sobreposição correta
    overflow: "hidden",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
    border: "1px solid #000",
    position: "relative",
    zIndex: 1, // Mantém a imagem acima da animação
  }));

  return (
    <StyledHero>
      {/* Background Animado */}
      <AnimationBackground />

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Avatar */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box position="relative">
              <StyledImg src={Avatar} alt="Avatar" />
            </Box>
          </Grid>

          {/* Texto e Botões */}
          <Grid size={{ xs: 12, md: 9 }} textAlign="center">
            <Typography variant="h2" color="primary">
              Hiago Cavalcante
            </Typography>
            <Typography variant="h4" color="primary">
              Desenvolvedor de Software Front-End
            </Typography>
            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: 2, backgroundColor: "black" }} />
            </Grid>
            <Grid display="flex" justifyContent="center" gap={2}>
              <LinkedlnButton />
              <GithubButton />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
