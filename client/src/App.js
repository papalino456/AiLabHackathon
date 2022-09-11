import React, { useEffect }  from "react";
import { Container } from "@material-ui/core"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import useStyles from "./styles"

import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <div className={ classes.bar }> <Navbar/> </div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;