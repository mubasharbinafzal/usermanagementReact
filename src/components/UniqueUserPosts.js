// components/UniqueUserPosts.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUniqueUserPosts } from '../store/actions/postActions';

const UniqueUserPosts = ({ userId }) => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchUniqueUserPosts(userId));
  }, [dispatch, userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Posts by User</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniqueUserPosts;
