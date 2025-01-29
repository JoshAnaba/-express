import express from 'express';
import {getPosts, getPost, createPost} from '../controllers/postController.js';
const router = express.Router();

router.get('/', getPosts);

// get single post
router.get('/:id', getPost);

router.post('/', createPost);


export default router;