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
          Desenvolvedor Full Stack | Criador de Soluções Digitais
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
          Olá! Meu nome é Hiago Cavalcante, sou um desenvolvedor de software, sou estudante da faculdade de Gestão da Informação na Universidade federal de Goias (UFG) e atualemte tenho 23 anos. Desde pequeno sempre tive uma paixão por tecnologia e sempre busquei aprender mais sobre essa área. Mas comecei minha jornada profissional como Suporte Tecnico e, onde tive a oportunidade de aprender sobre redes, sistemas operacionais e resolução de problemas técnicos. Com o tempo, minha curiosidade me levou ao desenvolvimento de software, onde descobri minha verdadeira vocação.
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
          Vamos construir algo incrível juntos? Estou sempre aberto a novos desafios e 
          oportunidades de colaboração!
        </Typography>
      </Box>
    </StyledAbout>
  );
};

export default AboutMe;
