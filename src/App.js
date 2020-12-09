import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Agents from './pages/Agents'
import BorrowersInformation from './pages/BorrowersInformation'
import Loan from './pages/Loan'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/loans">
            <Loan /> 
          </Route>
          <Route path="/borrowers">
            <BorrowersInformation />
          </Route>
          <Route path="/">
            <Agents />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}