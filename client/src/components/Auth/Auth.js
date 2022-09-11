import React, { useState, useEffect } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import { GoogleLogin } from "react-google-login"
import { gapi } from 'gapi-script';
import useStyles from "./styles"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from "./Input"
import Icon from "./Icon"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Auth = () => {
    const dispatch = useDispatch();
    const clientId = '189406600839-i87746e1rl2ok5rfhm8g1jth2geu8a3b.apps.googleusercontent.com'
    useEffect(() => {
        const initClient = () => {
              gapi.client.init({
              clientId: clientId,
              scope: ''
            });
         };
         gapi.load('client:auth2', initClient);
     });

    const history = useHistory()

    const classes = useStyles()

    const [showPassword, setShowPassword] = useState(false);

    const [isSignup, setIsSignup] = useState(false)

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = () =>{

    }
    const handleChange = () =>{

    }
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }
    const GoogleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({type: 'AUTH', data: {result, token}})
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    }
    const GoogleFailure = (error) => {
        console.log("error", error)
    }
  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="lastName" label="Last Name" handleChange={handleChange}  half/>
                            </>
                        )
                    }
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword? "text" : "password"} handleShowPassword={handleShowPassword} />
                    { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                </Grid>
                <GoogleLogin 
                    clientId={clientId}
                    buttonText="Sign In with Google"
                    onSuccess={GoogleSuccess}
                    onFailure={GoogleFailure}
                    cookiePolicy="single_host_origin"
                    className={classes.googleButton}
                />

                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {isSignup? "Sign Up" : "Sign In"}
                </Button>
                <Grid container justifyContent='flex-end'>
                    <Grid item >
                        <Button onClick={switchMode}>
                            {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth