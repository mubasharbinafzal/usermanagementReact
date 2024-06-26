// components/PostList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost, searchPosts } from '../store/actions/postActions';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error, filteredPosts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleSearch = (e) => {
    dispatch(searchPosts(e.target.value));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const postList = filteredPosts.length > 0 ? filteredPosts : posts;

  return (
    <div>
      <h2>Post List</h2>
      <input type="text" placeholder="Search Posts" onChange={handleSearch} />
      <ul>
        {postList.map((post) => (
          <li key={post.id}>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
