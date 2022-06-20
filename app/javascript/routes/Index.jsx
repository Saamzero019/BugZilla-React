import { Route, BrowserRouter as Router, Switch  } from "react-router-dom";
import Home from "../Components/Home";

    // Add Front-End Paths here

export default (
    <Router>
        <Switch>
            <Route path="/" component = {Home} />
        </Switch>
    </Router>
);


