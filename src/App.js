import "./App.css";
import Navigation from "./components/navigation/navigation";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";

const PageRoot = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => (!props.matches ? `70px` : `0`)};
`;

function App() {
  const theme = createTheme();
  const themeRoot = useTheme();
  const matches = useMediaQuery(themeRoot.breakpoints.up("sm"));
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex" }}>
        <Router>
          <Navigation />
          <PageRoot matches={matches}>
            <Routes>
              {routes.map((route, index) => {
                return (
                  <Route
                    exact
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  ></Route>
                );
              })}
            </Routes>
          </PageRoot>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
