import React, {useState, useEffect} from "react";
import useStyles from "./styles"
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = ({currentId, setCurrentId}) => {
    const user = JSON.parse(localStorage.getItem("profile"))
    const classes = useStyles();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        title: '', description: '',tags: '', selectedFile: ''
    });
    const post = useSelector((state) => (currentId ? state.posts.find((description) => description._id === currentId): null))
    useEffect(() => {
        if(post) setPostData(post)
    }, [post])
    const clear = () => {
        setCurrentId(0);
        setPostData({title: '', description: '',tags: '', selectedFile: ''})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPost({...postData, name: user?.result?.name}))
    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Make a post
                </Typography>
                <TextField name="title" variant="filled" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="description" variant="filled" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}/>
                <TextField name="tags" variant="filled" label="#Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}/>
                <div className={classes.fileInput}>
                    <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64})=> setPostData({ ...postData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form