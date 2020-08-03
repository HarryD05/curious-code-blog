import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

//Components
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home';
import PostList from './pages/PostList';
import Post from './pages/Post';
import Contacts from './pages/Contacts';
import Login from './pages/admin/Login';
import Create from './pages/admin/Create';
import Unknown from './pages/Unknown';

//Style scss
import './style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contacts' component={Contacts} />
          <Route exact path='/posts' component={PostList} />
          <Route exact path='/posts/:id' component={Post} />
          <Route exact path='/admin' component={Login} />
          <ProtectedRoute exact path='/admin/create' component={Create} />

          <Route path='*' component={Unknown} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;