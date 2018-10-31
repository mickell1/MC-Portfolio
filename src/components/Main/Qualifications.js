/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import quals from '../../images/quals.jpeg'

class Qualifications extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <article id="qualifications" className={`${this.props.article === 'qualifications' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Qualifications</h2>
        <span className="image main"><img src={quals} alt="" /></span>
        <h4>BIRKBECK UNIVERSITY OF LONDON [2014 - 2017]</h4>
        <p>BSc Computing (Computer Science): 2.2</p>

        <h4>MICROSOFT IT ACADEMY [2014 - 2014]</h4>
        <p>Active Directory (Microsoft Certified, MCSA)</p>
        <p>Microsoft Exchange 2010 (Microsoft Certified, MCITP)</p>

        <h4>PEARSON’S (ADVANCED APPRENTICESHIP FOR IT & TELECOMS PROFESSIONALS)[2011 - 2011]</h4>
        <p>Windows Operating Systems (Microsoft Certified, MTA)</p>
        <p>Networking Fundamentals (Microsoft Certified, MTA)</p>
        <p>CompTIA A+ IT Technician</p>
        <p>Windows 7 configuration (Microsoft Certified, MCTS)</p>
        <p>Diploma in ICT Professional Competence (Distinction)</p>
        <p>Diploma in ICT Systems & Principles (Distinction)</p>

        <h4>BARNFIELD COLLEGE [2009 - 2010]</h4>
        <p>BTEC Level 2: First Diploma IT(pass)</p>
        <p>Adult Numeracy(pass)</p>
        <p>Adult Literacy(pass)</p>
        <p>OCR Level 2: IT(Merit x2, Pass x2)</p>

        <h4>LEALANDS HIGH SCHOOL [2004 - 2009]</h4>
        <p>GCSE: Maths; English; Physical Education</p>

        {close}
      </article>
    )
  }
}

export default Qualifications
