import React from 'react';

import auth from '../../auth';

class AdminLogin extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='container' id='admin-login-container'>
        <h1>Admin Login Page</h1>
        <form id='post-form' onSubmit={(event) => {
          event.preventDefault();
          const form = document.getElementById('post-form');
          let values = [];
          for (let i = 0; i < form.length; i++) {
            values.push(form.elements[i].value);
          }
          auth.login(values, () => {
            this.props.history.push('/admin/create');
          });
        }}>
          <label htmlFor='username'>Username</label><br />
          <input name='username' type='text'></input><br />
          <br />
          <label htmlFor='password'>Password</label><br />
          <input name='password' type='password'></input><br />

          <button className='submit-button' type='submit'>Submit</button>
        </form>
      </div>
    );
  }

}

export default AdminLogin;