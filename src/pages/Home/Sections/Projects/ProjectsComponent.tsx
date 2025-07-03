import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Grid, 
  styled,
  Box,
  Chip
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { motion } from "framer-motion";
import Dota2Image from "../../../../assets/Images/Dota2.png";
import Avatar6Image from "../../../../assets/Images/Metflix.png";

const Projects = () => {
  const projects = [    {
      title: "Dota 2 Team Builder",
      description: "Uma aplicação web para gerenciar equipes de Dota 2, permitindo criação de times, gerenciamento de jogadores.",
      technologies: ["React", "TypeScript", "Material-UI", "Redux"],
      githubUrl: "https://github.com/Hiago-Cavalcante/Dota_2_Teams",
      liveUrl: "https://dota-2-teams.vercel.app/",
      image: Dota2Image
    },
    {
      title: "MetFlix",
      description: "Copia de um site de streaming de filmes e series, usando API do TMDB.",
      technologies: ["React", "Node.js", "TypeScript", "Material-UI"],
      githubUrl: "https://github.com/Hiago-Cavalcante/Agenda-Vacina",
      liveUrl: "https://met-flix-v2-bmra.vercel.app/",
      image: Avatar6Image
    },
    
  ];
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8, 0),
  }));

  const ProjectCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: theme.shadows[8],
    }
  }));

  return (
    <StyledProjects id="projects">
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          textAlign="center" 
          mb={4} 
          color="primary"
          sx={{ fontWeight: 'bold' }}
        >
          Meus Projetos
        </Typography>
        <Typography 
          variant="h6" 
          textAlign="center" 
          mb={6} 
          color="text.secondary"
          sx={{ maxWidth: '600px', margin: '0 auto 48px' }}
        >
          Alguns dos projetos que desenvolvi para demonstrar minhas habilidades
        </Typography>        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <ProjectCard>                <Box
                  component="img"
                  src={project.image}
                  alt={`Preview do ${project.title}`}
                  sx={{
                    height: 200,
                    width: '100%',
                    objectFit: 'cover',
                    backgroundColor: 'grey.200',
                    borderRadius: '4px 4px 0 0'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <Box
                  sx={{
                    height: 200,
                    backgroundColor: 'grey.200',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'grey.600',
                    borderRadius: '4px 4px 0 0'
                  }}
                >
                  <Typography variant="h6">Preview do Projeto</Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom color="primary">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ padding: 2, justifyContent: 'space-between' }}>
                  <Button 
                    size="small" 
                    href={project.githubUrl}
                    startIcon={<GitHub />}
                    color="primary"
                  >
                    GitHub
                  </Button>
                  <Button 
                    size="small" 
                    href={project.liveUrl}
                    startIcon={<Launch />}
                    variant="contained"
                    color="primary"
                  >
                    Ver Projeto                  </Button>
                </CardActions>
              </ProjectCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
