/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import pic03 from '../../images/pic03.jpg'

class About extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">About</h2>
        <span className="image main"><img src={pic03} alt="" /></span>
        <p>
          Experienced full-stack developer. Strong knowledge of agile practices and principles and is PSM1 certified. 5 years experience working in the IT industry this includes: tech support, field engineer, finance, legacy systems and software development.
        </p>
        <h4>FOOTBALL</h4>
        <p>
          I currently play for Luton Allstarts FC & Nomura FC I play 3 times a week, I also enjoy watching football.
          Previously played and captained my Sunday league team
        </p>
        <h4>MUSICIAN</h4>
        <p>
          Gospel drummer & singer as part of my church’s music department and have performed in front of congregations with 150+ people.
          I am currently learning to play the Piano
        </p>
        <h4>CARS</h4>
        <p>I have organised meets for fellow young drivers to come together and present their projects </p>
        <h4>ADRA AMBASSADOR</h4>
        <p>Participate in annual appeals incl. half marathons and door-to-door fundraising.</p>
        <h4>OTHER INTERESTS</h4>
        <p>I like sports, music, activities, socialising, travelling and food!</p>
        {close}
      </article>
    )
  }
}

export default About
