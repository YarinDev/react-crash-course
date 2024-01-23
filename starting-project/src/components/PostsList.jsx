import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsLists() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Yarin" body="React is awesome!" />
        <Post author="Inbar" body="JS is awesome!" />
      </ul>
    </>
  );
}

export default PostsLists;
