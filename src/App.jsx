import Index from "pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "styles/App.css";
import BorderCollieFontPage from "pages/bordercollie";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/BorderCollie">
            <BorderCollieFontPage />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
