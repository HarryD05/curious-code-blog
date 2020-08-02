import React from 'react';
import auth from '../../auth';

class AdminCreate extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='container' id='admin-create-container'>
        <h1>Create New Post</h1>
        <form id='create-form' onSubmit={(event) => {
          event.preventDefault();
          const form = document.getElementById('create-form');
          let values = [];
          for (let i = 0; i < form.length; i++) {
            let item = form.elements[i].value;
            console.log(item + ' ' + i);
            if (i === 3) {
              item = item.split(',');
              item = item.map(val => val.split(' ').join('_'));
            }

            values.push(item);
          }

          fetch('/posts/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title: values[0],
              text: values[1],
              tags: values[3],
              image: values[4],
              altText: values[5],
              link: values[6],
              createdAt: null
            })
          })

          auth.logout(() => {
            this.props.history.push('/');
          });
        }}>

          <label htmlFor='title'>Title</label><br />
          <input name='title' type='text' required></input><br />
          <br />
          <label htmlFor='text'>Text</label><br />
          <textarea id='text-textarea' name='text' type='text' required></textarea><br />
          <br />
          <input name='createdAt' value='' readOnly hidden></input>
          <label htmlFor='tags'>Tags</label><br />
          <em>(seperate each with a comma)</em><br />
          <input name='tags' type='text'></input><br />
          <br />
          <label htmlFor='image'>Image (URL)</label><br />
          <input name='image' type='text'></input><br />
          <br />
          <label htmlFor='altText'>Image alt text</label><br />
          <input name='altText' type='text'></input><br />
          <br />
          <label htmlFor='link'>Link</label><br />
          <input name='link' type='text'></input><br />
          <br />
          <input name='comments' value={[['']]} readOnly hidden></input>

          <button className='submit-button' type='submit'>Submit</button>
        </form>

        <button id='logout-button' onClick={() => {
          auth.logout(() => {
            this.props.history.push('/');
          });
        }}>Logout</button>
      </div>
    );
  }

}

export default AdminCreate;