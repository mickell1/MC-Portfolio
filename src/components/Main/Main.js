/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Introduction from './Introduction/Introduction'
import Experience from './Experience/Experience'
import Qualifications from './Qualifications/Qualifications'
import About from './About/About'
import Contact from './Contact/Contact'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <Introduction article={this.props.article} articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle} />

        <Experience article={this.props.article} articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle} />

        <Qualifications article={this.props.article} articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle} />

        <About article={this.props.article} articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle} />

        <Contact article={this.props.article} articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle} />

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
