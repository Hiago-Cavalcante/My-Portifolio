import { Button } from "@mui/material";

const AboutMeButton: React.FC = () => {
  const handleClick = () => {
    console.log("oi");
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={handleClick}
      sx={{
        backgroundColor: "background.default", // Cor de fundo
        padding: "12px 24px", // Aumenta o padding para um botão maior
        fontSize: "1.2rem", // Aumenta o tamanho da fonte
        width: "200px", // Define uma largura fixa (opcional)
        "&:hover": {
          color: "background.default", // Muda a cor do texto no hover
          borderColor: "primary.main", // Muda a cor da borda no hover
          backgroundColor: "primary.main", // Mantém o background igual
        },
      }}
    >
      Sobre mim
    </Button>
  );
};

export default AboutMeButton;
