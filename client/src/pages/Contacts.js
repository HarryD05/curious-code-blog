import React from 'react';
import ContactCard from '../components/ContactCard';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          title: 'REPL.IT',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/1200px-Repl.it_logo.svg.png',
          url: 'https://repl.it/@davish16'
        },
        {
          title: 'GITHUB',
          image: 'https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png',
          url: 'https://github.com/harryD05/'
        },
        {
          title: 'FCC',
          image: 'https://secure.meetupstatic.com/photos/event/4/c/b/b/600_468259643.jpeg',
          url: 'https://www.freecodecamp.org/davish16'
        }
      ]
    }
  }

  renderList() {
    return this.state.contacts.map(details => {
      return (
        <ContactCard key={details.title} details={details} />
      )
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Contacts</h1>
        <h3>My public accounts on coding websites</h3>
        <div className='contact-list'>
          {this.renderList()}
        </div>
      </div>
    )
  }
}

export default Contacts;