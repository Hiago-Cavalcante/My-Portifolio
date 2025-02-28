import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const LinkedlnButton: React.FC = () => {
  const handleClick = () => {
    window.open(
      "https://www.linkedin.com/in/hiago-cavalcante-menezes-78b6a4251/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<LinkedInIcon />}
      onClick={handleClick}
      sx={{
        backgroundColor: "background.default", // Cor de fundo
        "&:hover": {
          color: "secondary.main", // Muda a cor do texto no hover
          borderColor: "secondary.main", // Muda a cor da borda no hover
          backgroundColor: "background.default", // Mantém o background igual
        },
      }}
    >
      Linkedln
    </Button>
  );
};

export default LinkedlnButton;
