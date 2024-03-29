import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsLists({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prevPosts) => {
      return [postData, ...prevPosts];
    });
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} body={post.body} author={post.author} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Why not create one?</p>
        </div>
      )}
    </>
  );
}

export default PostsLists;
