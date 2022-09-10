import React from 'react'
import logo from "../../images/4545454d93f74d68a7b2fb418c08df09-transformed.png"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import useStyles from "./styles"

const Navbar = () => {
    const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="absolute" color="inherit" >
        <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2" align="center">Vr-gram</Typography>
        <img className={classes.image} src={ logo } alt="VR-gram" height="60"></img>
        </div>
        <Toolbar className={classes.toolbar}>

        </Toolbar>
    </AppBar>
  )
}

export default Navbar