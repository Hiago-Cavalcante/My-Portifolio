import { Container, styled, Typography, Divider } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import Grid from "@mui/material/Grid2"; // Importando Grid2 corretamente
import LinkedlnButton from "./components/Linkedln";
import GithubButton from "./components/GitHubButton";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <StyledImg src={Avatar} alt="Avatar" />
          </Grid>

          {/* Texto e Botões */}
          <Grid size={{ xs: 12, md: 8 }} textAlign="center">
            <Typography variant="h1" color="primary">
              Hiago Cavalcante
            </Typography>
            <Typography variant="h4" color="primary">
              Desenvolvedor de Software Front End
            </Typography>
            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: 2, backgroundColor: "white" }} />
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
