const getComments = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await (
    await fetch("https://jsonplaceholder.typicode.com/comments")
  ).json();
};

function Comments() {
  return <div>Comment</div>;
}

export default Comments;
