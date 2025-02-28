import { Box, styled } from "@mui/material";

interface ParallelogramProps {
  width: string;
  height: string;
  color: string;
  duration: string;
  left: string;
  top: string;
}

const AnimatedBackground = () => {
  const BackgroundWrapper = styled(Box)({
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: 0, // Fica atrás do conteúdo do Hero
  });

  const Parallelogram = styled("div")<ParallelogramProps>(
    ({ width, height, color, duration, left, top }) => ({
      position: "absolute",
      width,
      height,
      backgroundColor: color,
      transform: "skew(-50deg)",
      animation: `moveBar ${duration} linear forwards`, // Mudado de infinite para forwards
      opacity: 0.6,
      left,
      top,
    })
  );

  return (
    <BackgroundWrapper>
      <Parallelogram
        width="20px"
        height="300px"
        color="#A0B9D9"
        duration="18s"
        left="-10%"
        top="100%"
      />
      <Parallelogram
        width="10px"
        height="300px"
        color="#3A3D40"
        duration="17s"
        left="-20%"
        top="100%"
      />
      <Parallelogram
        width="10px"
        height="500px"
        color="#F0F3F5"
        duration="15s"
        left="-30%"
        top="100%"
      />
      <Parallelogram
        width="15px"
        height="400px"
        color="#5A7D9A"
        duration="15s"
        left="-50%"
        top="100%"
      />
      <Parallelogram
        width="12px"
        height="350px"
        color="#7FFFD4"
        duration="18s"
        left="70%"
        top="100%"
      />
      <Parallelogram
        width="15px"
        height="400px"
        color="#5A7D9A"
        duration="15s"
        left="50%"
        top="100%"
      />
      <Parallelogram
        width="10px"
        height="300px"
        color="#3A3D40"
        duration="20s"
        left="20%"
        top="100%"
      />
      <style>
        {`
          @keyframes moveBar {
            0% { transform: skew(-40deg) translateY(100%); }
            100% { transform: skew(-40deg) translateY(-1500px); } /* Alterado para parar no topo (0 em vez de -1000px) */
          }
        `}
      </style>
    </BackgroundWrapper>
  );
};

export default AnimatedBackground;
