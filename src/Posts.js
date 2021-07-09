import axios from "axios";
import React, { useEffect } from "react";

const Posts = () => {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = React.useState([]);

  const getPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setPosts(response.data);
        console.log(posts);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          title: {post.title},<div> body: {post.body} </div>
          <hr />
          <br />
        </li>
      ))}
    </ul>
  );
};

export default Posts;
