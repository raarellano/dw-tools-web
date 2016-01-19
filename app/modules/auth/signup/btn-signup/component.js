import React from 'react'
import { BtnLearnMore } from './../../../about/btn-learn-more/component'
import { BtnLearnMoreModal } from './../../../about/btn-learn-more/modal/component'
import { Link } from 'react-router'

export const BtnSignup = React.createClass({
  render() {
    let html = (
      <div className="btn-group" role="group" aria-label="Basic example">
        <BtnLearnMore />
        <Link to='/signup' className='btn btn-success'>Sign Up</Link>
        <BtnLearnMoreModal />
      </div>
    )
    return html
  }
})
