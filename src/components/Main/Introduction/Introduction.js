/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import lake from '../../../images/lake_moraine.jpg'

class Introduction extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="heading">Introduction</h2>
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
    )
  }
}

export default Introduction
