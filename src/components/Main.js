/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

import lake from '../images/lake_moraine.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Introduction</h2>
          <span className="image main"><img src={lake} alt="" /></span>
          <p>
            I started my career as an IT apprentice where I learned the basics of IT and gained some professional qualifications. These consisted of the following:
          </p>
          <ul>
            <li>Windows 7 configuration (Microsoft Certified, MCTS)</li>
            <li>CompTIA A+ IT Technician</li>
            <li>Windows Operating Systems(Microsoft Certified)</li>
            <li>Networking Fundamentals(Microsoft Certified) Diploma in ICT Professional Competence (Distinction)</li>
            <li>Diploma in ICT Systems & Principles (Distinction)</li>
          </ul>
          <p>
          After completing my apprenticeship I then secured a field engineer role at Partnership Education where I delivered 1st/2nd line support to schools in Bedfordshire, Hertfordshire & Buckinghamshire.
          The tasks I undertook included server support, setting up IT suites, Systems etc. I also achieved the Active Directory (Microsoft Certified, MCSA) & Microsoft Exchange 2010 (Microsoft Certified, MCITP) whilst at Partnership Education.
          </p>

          <p>
          After being in my role for 2 years I made the decision to go and study, I enrolled on a computer science degree at Birkbeck University of London and carried on working at Partnership for the first 2 years of my degree.
          After 3 years at Partnership I left my role and completed an internship with J.P.Morgan as a technology analyst, this was a great experience where I learnt a lot and made a great network. After this I decided to focus on my final year at university,
          after I completed my degree I joined AND Digital. I am now an associate developer at AND Digital.
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work Experience</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="qualifications" className={`${this.props.article === 'qualifications' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Qualifications</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>
          I Am an Associate developer with full-stack experience. Strong knowledge of agile practices and principles and I am Professional Scrum Master 1 certified. 5 years experience working in the IT industry this includes: tech support, field engineer, finance, legacy systems  and software development.
          Below is some of the social events I like to do outside of work.
          </p>
          <h4>FOOTBALL</h4>
          <p>I currently play for Luton Allstarts FC & Nomura FC I play 3 times a week, I also enjoy watching football.</p>
          <h4>MUSIC</h4>
          <p>I play the drums and occasionally sing in a group. I am currently learning to play the Piano</p>
          <h4>CARS</h4>
          <p>I have organised meets for fellow young drivers to come together and present their projects</p>
          <h4>ADRA AMBASSADOR</h4>
          <p>Participate annually in the fundraising activities such as door-to-door collections and half marathon walks.</p>
          <h4>OTHER INTERESTS</h4>
          <p>I like sports, music, activities, socialising, travelling and food!</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
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
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main
