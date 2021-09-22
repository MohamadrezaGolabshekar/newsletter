import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import theme from "./theme";
import './App.css';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>

          <Switch>
            <Route path="/">
              <h1>test</h1>
            </Route>

          </Switch>

        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
