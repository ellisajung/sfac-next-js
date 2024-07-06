const getPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
};

function Posts() {
  return <div>Posts</div>;
}

export default Posts;
