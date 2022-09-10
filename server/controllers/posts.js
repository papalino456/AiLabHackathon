import postMessage from "../models/postMessage.js"
import mongoose from "mongoose"

export const getPosts = async (req, res) => {
    try{
        const postMessages = await postMessage.find()
        console.log(postMessages)
        res.status(200).json(postMessages)
    } catch(error) {
        res.status(404).json({message:error.message})
    }
}

export const createPost = async (req, res) => {

    const post = req.body;
    const newPost = new postMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message:error.message})
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id")

    await postMessage.findByIdAndRemove(id)

    res.json({ message: "post deleted succesfully"})
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id")

    const post = await postMessage.findById(id);
    const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true})

    res.json(updatedPost)
}