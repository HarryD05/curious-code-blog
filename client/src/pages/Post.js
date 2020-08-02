import React from 'react';
import axios from 'axios';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    }
  }

  async componentDidMount() {
    await this.getPost();
  }

  async getPost() {
    const response = await axios.get(`/posts/${this.props.match.params.id}`);

    this.setState({
      post: response.data
    });
  }

  render() {
    const { _id, title, text, image, altText, link, comments } = this.state.post;

    if (text === '') return null;

    let link_html;
    if (link === '') {
      link_html = (<div className='post-link'></div>)
    } else {
      link_html = (<a className='post-link' href={link} target='_blank' rel="noopener noreferrer">Click here</a>);
    }

    let img;
    if (image === '') {
      img = (<div className='post-image'></div>)
    } else {
      img = (<img className='post-image' src={image} alt={altText} />)
    }

    let comments_html = '';
    if (comments !== undefined) {
      if (comments.length === 0) {
        comments_html = `<div></div>`;
      } else {
        comments.map(val => {
          comments_html += `<div><p>${val[0]}</p><em>${val[1]}</em></div>`;
          return val;
        })
      }
    } else {
      comments_html = `<div></div>`;
    }

    return (
      <div className='container'>
        <div className='post'>
          <div className='post-content'>
            <h1 className='post-title'>{title}</h1>
            <p className='post-text'>{text}</p>
            {link_html}

            <h2>Comments</h2>
            <form id='comment-form' onSubmit={(event) => {
              event.preventDefault();

              const form = document.getElementById('comment-form');
              let values = [];
              for (let i = 0; i < form.length; i++) {
                let item = form.elements[i].value;
                values.push(item);
              }

              fetch(`/posts/comment/${_id}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: values[0],
                  content: values[1]
                })
              })

              window.location.reload();
            }}>
              <label htmlFor='name'>Name</label>
              <input className='comment-name-input' name='name' placeholder='enter name...'></input>
              <textarea className='comment-content-input' name='content' placeholder='enter comment...'></textarea>
              <button className='submit-button' type='submit'>Post comment</button>
            </form>
            <div className='comment-section' dangerouslySetInnerHTML={{
              __html: comments_html
            }}>

            </div>
          </div>
          {img}
        </div>
      </div>
    );
  }
}

export default Post;