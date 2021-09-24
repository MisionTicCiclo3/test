import Index from "pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "styles/App.css";
import BorderCollieFontPage from "pages/bordercollie";
import Layout from "layouts/Layout";
import LoboSiberiano from "pages/LoboSiberiano";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/BorderCollie">
              <BorderCollieFontPage />
            </Route>
            <Route path="/Lobosiberiano">
              <LoboSiberiano/>
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
