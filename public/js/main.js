const output = document.querySelector('#output');
const getPostsBtn = document.querySelector('#get-posts');

const getPosts = async () => {
  try {
    const res = await fetch('https://express-tut.fly.dev/api/posts')
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts = await res.json();
  output.innerHTML = '';
  posts.forEach(post => {
    const li = document.createElement('li');
    li.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
    output.appendChild(li);
  });
  } catch (err) {
   console.error(err);
  }
}

getPostsBtn.addEventListener('click', getPosts);
