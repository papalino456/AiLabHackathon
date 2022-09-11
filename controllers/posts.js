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
    const newPostMessage = new postMessage({...post, creator: req.userId, createdAt: new Date().toISOString()})

    try {
        await newPostMessage.save()
        res.status(201).json(newPostMessage);

    } catch (error) {
        res.status(409).json({ message:error.message})
        console.log(error)
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

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await postMessage.findById(id);

    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await postMessage.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
}