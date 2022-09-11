import React, { useState, useEffect }  from "react";
import { Container, Grow, Grid } from "@material-ui/core"
import { useDispatch } from "react-redux";
import {getPosts} from '../../actions/posts'
import Posts from "../Posts/Posts"
import Form from "../Form/Form"

const Home = () => {
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(getPosts());
    }, [dispatch])

  return (
    <Grow in>
    <Container disableGutters>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={24}>
                <Posts/>
                <Form/> {/* MOVER ESTO A LA PAGINA DE PERFIL */}
            </Grid>
        </Grid>
    </Container>
    </Grow>
  )
}

export default Home