import { CircularProgress, Box, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";

const Loading = () => {
  const StyledLoading = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  }));

  return (
    <StyledLoading>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CircularProgress size={60} thickness={4} color="primary" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Typography 
          variant="h6" 
          color="primary" 
          sx={{ mt: 3, fontWeight: 500 }}
        >
          Carregando...
        </Typography>
      </motion.div>
    </StyledLoading>
  );
};

export default Loading;
