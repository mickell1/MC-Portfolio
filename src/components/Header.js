/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">

        </div>
        <div className="content">
            <div className="inner">
                <h1>Mickell Crawford</h1>
                <p>I am full stack Javascript Engineer & Consultant.
                  I use Agile methods to help build digital products, teams and systems. Find out more below
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Introduction</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work Experience</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('qualifications')}}>Qualifications</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
