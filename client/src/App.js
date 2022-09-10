import React, { useEffect }  from "react";
import { Container, Grow, Grid } from "@material-ui/core"
import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"
import useStyles from "./styles"
import { useDispatch } from "react-redux";
import {getPosts} from './actions/posts'


import Navbar from "./components/NavBar/Navbar";

const App = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <div className={classes.bar}>
            <Navbar></Navbar>
            </div>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <Posts/>
                        </Grid>
                        <Form/> {/* MOVER ESTO A LA PAGINA DE PERFIL */}
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;