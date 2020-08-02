import React from 'react';
import axios from 'axios';

import PostListItem from '../components/PostListItem';

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }


  componentDidMount() {
    //When component is loaded, not rendered
    this.getPosts();
  }

  async getPosts() {
    const response = await axios.get('/posts');
    this.setState({
      posts: response.data
    });
  }

  renderList() {
    if (this.state.posts.length > 0) {
      return this.state.posts.map(post => {
        return (
          <PostListItem key={post._id} post={post} />
        )
      });
    }

    return (<h1 key='no_posts_found'>No posts found</h1>);
  }

  async getTagPosts(tag) {
    tag = tag.split(' ').join('_');
    let response;
    if (tag === '') {
      response = await axios.get(`/posts`);
    } else {
      response = await axios.get(`/posts/tag/${tag}`);
    }

    this.setState({
      posts: response.data
    });
  }

  render() {
    return (
      <div className='container'>
        <input id='tag-search' type='text' placeholder='search tag' onChange={async (event) => {
          await this.getTagPosts(event.target.value);
        }}></input>
        <div className='post-list'>
          {this.renderList()}
        </div>
      </div>
    )
  }
}

export default PostList;