
import { Card, Avatar, Grid, Typography, Paper, Button, CardMedia } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from "./styles"
import Form from "../Form/Form"
import { useSelector } from 'react-redux'
import Post from '../Posts/post/Post'

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const classes = useStyles()
  const posts = useSelector((state)=> state.posts)
  return (
    <div>

        <Card elevation={10} className={classes.card}>
          <Avatar referrerpolicy="no-referrer" className={classes.purple} alt={user.result.name} src={user.result.imageUrl}></Avatar>
          <Typography variant="h5">{user.result.name}</Typography>
          <div className={classes.ButtonGroup}>
          <Button variant='contained' color="secondary">Follow</Button>
          <Button variant='contained'>Message</Button>
          </div>
        </Card>

        <Paper elevation={10} className={classes.VideosCard}>

          <Grid container justifyContent='center'>

            <Form className={classes.Form}/>
        
            <Typography variant='h6'>Your posts</Typography>
            {posts.map((post) => (
                    <Grid disableGutters key={post._id} item xs={12} sm={24}>
                        <Post post={post}/>
                    </Grid>
                ))}

          </Grid>

        </Paper>

    </div>
  )
}

export default Profile