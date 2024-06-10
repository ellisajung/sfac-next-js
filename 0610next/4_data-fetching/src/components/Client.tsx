"use client";

import { useEffect, useState } from "react";

function Client() {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div>Client component</div>
      {isLoading ? "Loading" : <pre>{JSON.stringify(posts, null, 2)}</pre>}
    </>
  );
}

export default Client;
