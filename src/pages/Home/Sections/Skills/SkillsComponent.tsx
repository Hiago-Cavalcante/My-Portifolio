import { Box, Typography, Chip, Container, styled } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "Material-UI",
    "HTML5", "CSS3", "Git", "Node.js", "Vite",
    "Nest.Js", "MySQL","Docker ",
    "Python", 
    "PostgreSQL", "REST APIs",
  ];
  const StyledSkills = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0),
  }));

  return (
    <StyledSkills id="skills">
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          textAlign="center" 
          mb={4} 
          color="primary"
          sx={{ fontWeight: 'bold' }}
        >
          Minhas Skills
        </Typography>
        <Typography 
          variant="h6" 
          textAlign="center" 
          mb={6} 
          color="text.secondary"
          sx={{ maxWidth: '600px', margin: '0 auto 48px' }}
        >
          Tecnologias e ferramentas que utilizo para criar experiências digitais incríveis
        </Typography>        <Box 
          display="flex" 
          flexWrap="wrap" 
          justifyContent="center" 
          gap={2}
          sx={{ maxWidth: '800px', margin: '0 auto' }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Chip
                label={skill}
                variant="outlined"
                color="primary"
                sx={{ 
                  fontSize: "1rem", 
                  padding: "12px 20px",
                  height: 'auto',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    transform: 'translateY(-2px)',
                    boxShadow: (theme) => theme.palette.mode === 'dark' 
                      ? '0 4px 8px rgba(255,255,255,0.1)' 
                      : '0 4px 8px rgba(0,0,0,0.2)',
                    borderColor: 'primary.main'
                  },
                  transition: 'all 0.3s ease'
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
