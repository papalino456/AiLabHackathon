import React, {useState, useEffect } from 'react'
import {Link, useHistory, useLocation} from "react-router-dom"
import logo from "../../images/4545454d93f74d68a7b2fb418c08df09-transformed.png"
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core"
import useStyles from "./styles"
import { useDispatch } from 'react-redux'


const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const logout = () => {
        dispatch({type: 'LOGOUT'})
        history.push("/")
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

  return (
    <AppBar className={classes.appBar} position="absolute" color="inherit" >
        <div className={classes.brandContainer}>
        <Typography component={Link} to="/"className={classes.heading} variant="h2" align="center">Vr-gram</Typography>
        <img className={classes.image} src={ logo } alt="VR-gram" height="60"></img>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Button variant="contained" className={classes.logout} color="terciary" onClick={logout}>Logout</Button>
                    <Avatar referrerpolicy="no-referrer" component={Link} to="/profile" className={classes.purple} alt={user.result.name} src={user.result.imageUrl}></Avatar>
                </div>
            ): (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
  )
}

export default Navbar