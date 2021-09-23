import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import theme from "./theme";
import Home from "./pages/Home";
import SearchList from "./pages/SearchList";
import Bookmarks from "./pages/Bookmarks";
import Detail from "./pages/Detail";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>

          <Switch>
            <Route path="/detail">
              <Detail />
            </Route>
            
            <Route path="/search-result">
              <SearchList />
            </Route>

            <Route path="/bookmarks">
              <Bookmarks />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
