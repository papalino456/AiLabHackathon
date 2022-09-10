import React from "react";
import useStyles from "./style"
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import { Pannellum } from "pannellum-react";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from "react-redux";

import { deletePost } from "../../../actions/posts";


const Post = ({ post }) => {
const classes = useStyles();
const dispatch = useDispatch()
    return(
        <Card className={classes.card}>
                <Pannellum
                    width="100%"
                    height="500px"
                    image={post.selectedFile}
                    pitch={10}
                    yaw={180}
                    hfov={110}
                    autoLoad
                    onLoad={() => {
                        console.log("panorama loaded");
                    }}
                />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: "white"}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="h5" gutterBottom>{post.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small"/>
                    Like 
                    {post.likeCount}
                </Button>
                {/* quitar si no ponemos solo con auttenticacion //////////////////////////////////////////// */}
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                    {post.likeCount}
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post