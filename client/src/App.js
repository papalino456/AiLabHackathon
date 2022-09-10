import React, { useEffect }  from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"
import useStyles from "./styles"
import { useDispatch } from "react-redux";
import {getPosts} from './actions/posts'

import logo from "./images/4545454d93f74d68a7b2fb418c08df09-transformed.png"

const App = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <div className={classes.bar}>
            <AppBar className={classes.appBar} position="absolute" color="inherit" >
                <Typography className={classes.heading} variant="h2" align="center">Vr-gram</Typography>
                <img className={classes.image} src={ logo } alt="VR-gram" height="60"></img>
            </AppBar>
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