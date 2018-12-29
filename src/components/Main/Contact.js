/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

class Contact extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Contact</h2>
        <form method="post" action="mailto:mickellc@hotmail.co.uk">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required/>
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required/>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Reset" /></li>
          </ul>
        </form>
        <ul className="icons">
          <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="https://github.com/mickell1" className="icon fa-github"><span className="label">GitHub</span></a></li>
          <li><a href="https://www.linkedin.com/in/mickcraw/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
        </ul>
        {close}
      </article>
    )
  }
}

export default Contact
