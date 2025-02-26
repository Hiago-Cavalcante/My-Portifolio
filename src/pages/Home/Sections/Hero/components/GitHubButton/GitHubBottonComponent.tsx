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
    >
      GitHub
    </Button>
  );
};

export default GithubButton;
