import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Markdown from "react-markdown";
import postlist from "../posts.json";
import Layout from "../components/Layout";

const PostPage = () => {
  const params = useParams();
  const validId = parseInt(params.id);
  if (!validId) {
    return <Navigate to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  postlist.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Navigate to="/404" />;
  }
  return (
    <Layout>
      <div className="post">
        <h1>{fetchedPost.title}</h1>
        <small>
          Published on {fetchedPost.date} by {fetchedPost.author}
        </small>
        <hr />
        <Markdown linkTarget="_blank" children={fetchedPost.content} />
      </div>
    </Layout>
  );
};

export default PostPage;
