import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
      <p className="copyright">&copy; Gatsby Starter - MC Portfolio. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a> <a href="https://www.linkedin.com/in/mickcraw"><span className="fa fa-linkedin"></span></a>
      </p>    
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
