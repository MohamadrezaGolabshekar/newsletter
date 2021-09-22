import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import theme from "./theme";
import Home from "./pages/Home";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>

          <Switch>
            {/* <Route path="/search-results">
              <h1>test2</h1>
            </Route> */}

            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
