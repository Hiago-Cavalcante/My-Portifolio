import { Typography, Box, styled } from "@mui/material";

const AboutMe = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: theme.spacing(4),
  }));

  return (
    <StyledAbout id="about">
      <Box sx={{ maxWidth: "800px", textAlign: "center", p: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            fontFamily: "Montserrat, sans-serif",
            mb: 3,
          }}
        >
          Sobre Mim
        </Typography>
        
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "primary.main",
            fontFamily: "Montserrat, sans-serif",
            mb: 4,
          }}
        >
          Desenvolvedor Full Stack 
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            color: "text.secondary",
            fontFamily: "Montserrat, sans-serif",
            mb: 3,
            textAlign: "justify",
          }}
        >
          Olá! Meu nome é Hiago Cavalcante, tenho 23 anos, sou desenvolvedor de software e atualmente curso Gestão da Informação na Universidade Federal de Goiás (UFG). Minha trajetória na tecnologia começou no suporte técnico, uma fase essencial onde pude entender, na prática, como funcionam as engrenagens por trás das máquinas: redes, sistemas operacionais, manutenção e aquele quebra-cabeça diário de resolver problemas sob pressão.

          Com o tempo, percebi que minha curiosidade ia além de apenas consertar o que já existia. Queria entender como as coisas eram criadas — e foi assim que o desenvolvimento de software entrou na minha vida. Desde então, venho me dedicando a estudar e aplicar esse conhecimento em projetos que me desafiem e me façam crescer como profissional.


        </Typography>

    
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            color: "text.primary",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Estou sempre aberto a novos desafios e 
          oportunidades de colaboração!
        </Typography>
      </Box>
    </StyledAbout>
  );
};

export default AboutMe;
