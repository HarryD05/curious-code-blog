//SETTING UP ROUTER
const router = require('express').Router();

//GETTING Post SCHEMA
const Post = require('./../models/postModels');

//SETTING UP POST ROUTE for Posts - async because mongoose requests aren't instant
router.post('/', async (request, response) => {
  //RETRIEVE DATA FROM REQUEST
  const { title, text, tags, image, altText, link, comments } = request.body;

  const createdAt = Date.call();

  //CONSTRUCT Post MODEL
  const newPost = new Post({
    title, createdAt, text, tags, image, altText, link, comments
  });

  //SAVE Post MODEL
  try {
    const savedPost = await newPost.save();
    response.json(savedPost);
  } catch (error) {
    console.error(error);
  }
});

//SETTING UP POST ROUTE for comments - async because mongoose requests aren't instant
router.post('/comment/:id', async (request, response) => {
  //RETRIEVE DATA FROM REQUEST
  const { name, content } = request.body;
  const id = request.params.id;

  await Post.update(
    { _id: id },
    {
      $push: { comments: [name, content] }
    }
  );
});

//SETTING UP GET ROUTE (ALL Posts)
router.get('/', async (request, response) => {
  const posts = await Post.find();
  response.json(posts);
})

//SETTING UP GET ROUTE (SPECIFIC Post)
router.get('/:id', async (request, response) => {
  const id = request.params.id;
  if (id === 'latest') {
    const posts = await Post.find();
    response.json(posts[posts.length - 1]);
  } else if (id === 'first') {
    const posts = await Post.find();
    response.json(posts[0]);
  } else {
    const post = await Post.findById(request.params.id);
    response.json(post);
  }
})

//SETTING UP GET ROUTE (SPECIFIC Post VIA. TAG)
router.get('/tag/:id', async (request, response) => {
  const tag = request.params.id.toLowerCase();
  const posts = await Post.find();
  const modified = posts.map(post => {
    let { _id, title, tags, text, createdAt, image, altText, link, comments } = post;
    tags = tags.map(tag_ => tag_.toLowerCase());
    return { _id, title, tags, text, createdAt, image, altText, link, comments };
  });

  const filtered = modified.filter(val => val.tags.includes(tag));

  response.json(filtered);
});

module.exports = router;