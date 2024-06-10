// // 바깥에 빼서 코드를 쓸 수도 있음
// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
//   return posts;
// };
// // 위 코드 줄여쓰기
// const getPosts = async () =>
//   await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();

async function Server() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts);

  // 바깥에 코드를 뺐을 경우
  // const posts = await getPosts()

  return (
    <>
      <div>Server component</div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}

export default Server;
