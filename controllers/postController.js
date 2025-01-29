const posts = [
  {
    id: 1,
    title: 'Post 1',
    body: 'Body of post 1'
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'Body of post 2'
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'Body of post 3'
  }
]

export const createPost = async (req, res, next) => {
  const { title, body } = req.body;
  const id = posts.length + 1;
  const newPost = { id, title, body };
  if (!title || !body) {

    const err = new Error('Title and body are required');
    err.status = 400;
    return next(err);

  }
  posts.push(newPost);
  return res.status(201).json(posts);
}

export const getPosts = async (req, res, next) => {
  const { query } = req;
  console.log(query)
  const limit = parseInt(query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  return res.status(200).json(posts);
}

export const getPost = async (req, res, next) => {
  const { id } = req.params;
  const post = posts.find(post => post.id === parseInt(id));
  if (!post) {
    const err = new Error(`Post with id ${id} not found`);
    err.status = 404;
    return next(err);
  }
  return res.status(200).json(post);
}
