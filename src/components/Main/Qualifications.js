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
        <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
        {close}
      </article>
    )
  }
}

export default Qualifications
