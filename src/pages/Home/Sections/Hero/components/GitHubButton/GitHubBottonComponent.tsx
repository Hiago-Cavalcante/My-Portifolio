import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const GithubButton: React.FC = () => {
  const handleClick = () => {
    window.open(
      "https://github.com/Hiago-Cavalcante",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<GitHubIcon />}
      onClick={handleClick}
      sx={{
        backgroundColor: "background.default", // Cor de fundo
        "&:hover": {
          color: "background.default", // Muda a cor do texto no hover
          borderColor: "secondary.main", // Muda a cor da borda no hover
          backgroundColor: "primary.main", // Mantém o background igual
        },
      }}
    >
      GitHub
    </Button>
  );
};

export default GithubButton;
