// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link , Routes} from 'react-router-dom';
import { Container, CssBaseline, Box } from '@material-ui/core';
import NavBar from './components/NavBar';
import UserList from './components/UserList';
import PostList from './components/PostList';
import UniqueUserPosts from './components/UniqueUserPosts';
import User from "./components/User"

const App = () => {
  return (
    <div>
    <Router>
      <CssBaseline />
      <NavBar />
      <Box style={{ marginTop: '80px' }}>
        <Switch>
          <Route exact path="/" component={User} /> 
          <Route path="/posts" component={PostList} />
          <Route path="/user-posts" component={UniqueUserPosts} />
        </Switch>
      </Box>
    </Router> 

        {/* <User/>
      <UserList />
      <PostList />
      <UniqueUserPosts userId={1} /> Example: Show posts of user with ID 1 */}
    </div>
    
  );
};

export default App;
