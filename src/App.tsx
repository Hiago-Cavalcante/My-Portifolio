import Home from "./pages/Home";
import ThemeProvider from "./components/ThemeProvider";
import "./styles/globals.css";

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
