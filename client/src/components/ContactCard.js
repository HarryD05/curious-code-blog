import React from 'react';

class ContactCard extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const { details } = this.props;

    return (
      <div className='contact-card'>
        <a href={details.url} target='_blank' rel='noopener noreferrer'>
          <h2 className='title'>{details.title}</h2>
          <img className='contact-img' alt={details.title + ' logo'} src={details.image} />
        </a>
      </div>
    );
  }
}

export default ContactCard;