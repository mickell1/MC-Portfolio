/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import workExp from '../../../images/experience.jpeg'

class Experience extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="heading">Work Experience</h2>
        <span className="image main"><img src={workExp} alt="" /></span>

        <h4>SECRET ESCAPES [2019 - NOW]</h4>
        <p>Key Responsibilities</p>
        <ul>
          <li>Frontend engineer, Agile working, built various new and reusable components in component library</li>


          <li>Built two types of grids that displayed holiday sales and was shown on the homepage</li>
          <li>Implemented code review template and guidelines to improve development process</li>
          <li>Techstack: React, Typescript JavaScript, HTML, GraphQL, Styled Components, TDD, Jest, React testing library, Storybook, SCSS</li>
        </ul>

        <p>Key Achievements</p>
        <ul>
          <li>Implemented new code review cycle for all tech teams</li>
          <li>Conducted analysis using Google rail technique which led to performance improvements on the webiste</li>
        </ul>

        <h4>AND DIGITAL [2017 - 2019]</h4>
        <p>Key Responsibilities</p>
        <ul>
          <li>Full-stack Javascript Engineer & Consultant, use Agile methods to help build digital products, teams and systems.</li>
          <li>Created new reusable React components which was used across development team</li>
          <li>Implemented styling using SCSS & CSS and suggested more user friendly features</li>
          <li>Build web application to manage employees; add/edit employees, search functionality, API calls to get required data</li>
          <li>build out monolith application; microservices, updating microservice template & skeleton.</li>
          <li>Back end development for PSD2 and Open Banking product that enables consent management and compliance</li>
          <li>integrated various new web functionality such as filtering status, course list, creation of course form and styling.</li>
          <li>Built web dashboard containing profiles detailing individual’s skills and experience.</li>
          <li>External Clients: Premier Inn (Whitbread / Hospitality), Konsentus (Fintech / Open Banking), ANDDigital (Digital consultancy)</li> 
          <li>Techstack: React, JavaScript, Typescript, HTML, CSS, SaSS, Node, Docker, AWS, TDD, Storybook, Jest, React testing library & Mongo DB</li>
        </ul>

        <p>Key Achievements</p>
        <ul>
          <li>Joined AND Digital and became professional scrum master certified, since achieving this certification I have been scrum master/developer for our development team.</li>
          <li>Facilitation of stand ups, sprint refinements, sprint reviews, sprint retrospectives and sprint planning and other events</li>
          <li>Build relationship with clients and stakeholders</li>
          <li>Implemented new TDD/BDD testing format to make tests and documentation clearer</li>
        </ul>

        <h4>J.P.MORGAN | TECHNOLOGY ANALYST [2016 - 2016]</h4>
        <p>Key Responsibilities</p>
        <ul>
          <li>Designed and built a website portal that was accessible by all J.P.Morgan staff, which involved organising co-design sessions and utilised Sharepoint, HTML, CSS & Javascript</li>
          <li>Led a group of fellow summer analysts in the production of a marketing video. Post production utilised Adobe Premier Pro & After Effects</li>
          <li>Wrote a blog on the importance of user involvement in software design/development</li>
        </ul>

        <h4>PTS CONSULTING | PARTNERSHIP EDUCATION - SYSTEMS ENGINEER [2012 - 2016]</h4>
        <p>Key Responsibilities</p>
        <ul>
          <li>Provided software, hardware and server support (windows 8/7/Vista/Mac OS X); server 2003/2008 support; printer/router/SmartBoard to various schools across Bedfordshire</li>
          <li>Set up user profiles and reset user passwords using active directory</li>
          <li>Built computers and laptops using imaging software</li>
          <li>Desktop/laptop repair. This includes changing motherboards, CD drives, & other components</li>
        </ul>

        <h4>LUTON BOROUGH COUNCIL | PAYROLL CLERK [2012 - 2012]</h4>

        <h4>WHSMITH | CUSTOMER SERVICE ASSISTANT [2011 - 2012]</h4>

        <h4>PEARSON'S | IT APPRENTICE  [2011 - 2011]</h4>

        {close}
      </article>
    )
  }
}

export default Experience
