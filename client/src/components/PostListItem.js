import React from 'react';
import { Link } from 'react-router-dom';

class PostListItem extends React.Component {
  constructor(props) {
    super(props);

    this.onShowPost = this.onShowPost.bind(this);
  }

  onShowPost() {
    window.location.pathname = `/all-posts/${this.props.post._id}`;
  }

  renderDate(date_string) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date(date_string);

    return `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
  }

  renderTags(tags) {
    return tags.map(tag_ => {
      let tag = tag_.split('_');
      tag[0] = tag[0].charAt(0).toUpperCase() + tag[0].slice(1);
      tag = tag.join(' ');
      return (<span className='tag' key={tag}>{tag}</span>)
    });
  }

  render() {
    const { post } = this.props;

    return (
      <Link to={`/all-posts/${post._id}`} className='post-list-item'>
        <h3 className='title'>{post.title}</h3>
        <span className='date'>{this.renderDate(post.createdAt)}</span>
        <div className='tags'>{this.renderTags(post.tags)}</div>
      </Link>
    );
  }
}

export default PostListItem;