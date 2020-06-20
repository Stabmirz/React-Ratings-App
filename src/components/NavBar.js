import React from "react";
import Review from "./Review";
import Ratings from "./Ratings";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function NavBar() {
  return (
    <Router>
        <React.Fragment>
        <nav
            className="navbar navbar-expand-lg nav-tabs navbar-dark bg-secondary "
            style={{ fontSize: "18px", fontWeight: "700", color: "white" }}
            >
            <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/review">
                Review
                </Link>
                <Link className="nav-item nav-link" to="/ratings">
                Ratings
                </Link>
            </div>
        </nav>
          <Switch>
            <Route exact path="/" component={Review} />
            <Route path="/ratings" component={Ratings} />
          </Switch>
        </React.Fragment>
    </Router>
  );
}

export default NavBar;
