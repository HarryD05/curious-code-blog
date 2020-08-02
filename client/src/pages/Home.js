import React from 'react';
import axios from 'axios';
import PostListItem from '../components/PostListItem';

class Home extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

    this.state = {
      latestPost: null
    }
  }

  async componentDidMount() {
    const first = await axios.get('/posts/first');
    const latest = await axios.get('/posts/latest');

    this.setState({
      firstPost: first.data,
      latestPost: latest.data
    });
  }

  render() {
    const introText = `A GCSE student in the UK - with aspirations of studying computer science at Oxford Univeristy. I'm currently working on improving my web development skills - specifically the MERN stack. I focus my programming in Python and JavaScript.`;

    if (this.state.latestPost === null || this.state.firstPost === null) {
      return (
        <div className='container'>
          <h1>Welcome to CuriousCoder. I'm Harry.</h1>
          <p>{introText}</p>
        </div>
      );
    }

    const first = this.state.firstPost;
    const last = this.state.latestPost;

    return (
      <div className='container'>
        <h1>Welcome to CuriousCoder. I'm Harry.</h1>
        <p>{introText}</p>
        <br />
        <h2>First Post</h2>
        <PostListItem key={first._id} post={first} />
        <br />
        <h2>Latest Post</h2>
        <PostListItem key={last._id} post={last} />
        <br />
        <br />
        <em>If you have any questions, find any bugs, or want to make a request for a new feature, comment on the first post.</em>
      </div>
    );
  }

}

export default Home;