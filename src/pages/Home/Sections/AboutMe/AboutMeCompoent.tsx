import { Typography, Box, styled } from "@mui/material";
import AboutMeButton from "./components/AboutMeBtn";

const AboutMe = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // Para sobreposição correta
    overflow: "hidden",
  }));

  return (
    <StyledAbout>
      <Box sx={{ textAlign: "center", p: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#333",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Criando soluções que moldam o amanhã.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            color: "primary",
            mt: 2,
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Inovação, estratégia e tecnologia na ponta dos dedos. Vamos além do
          óbvio.
        </Typography>
        <Box mt={2} paddingTop={5}>
          <AboutMeButton />
        </Box>
      </Box>
    </StyledAbout>
  );
};

export default AboutMe;
