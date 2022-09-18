import "./App.css";
import Navigation from "./components/navigation/navigation";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const theme = createTheme();
  const themeRoot = useTheme();
  const matches = useMediaQuery(themeRoot.breakpoints.up('sm'));
  return (
    <ThemeProvider theme={theme} >
      <div  style={{display:'flex'}}>
      <Router>
        <Navigation />
        <div style={!matches ? {paddingTop:'70px'} : {paddingTop:'0'}}>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route exact key={index} path={route.path} element={<route.component/>}>
              </Route>
            );
          })}
        </Routes>
        </div>
      </Router>
      </div>
     </ThemeProvider>
  );
}

export default App;
