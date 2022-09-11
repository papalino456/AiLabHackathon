import React, { useEffect }  from "react";
import { Container } from "@material-ui/core"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import useStyles from "./styles"

import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile"

const App = () => {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <Container disableGutters>
                <div className={ classes.bar }> <Navbar/> </div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/profile" exact component={Profile} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;