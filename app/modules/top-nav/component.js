import React from 'react'
import { BtnLogin } from './../auth/login/btn-login/component'
import { BtnSignup } from './../auth/signup/btn-signup/component'
import { IndexLink } from 'react-router';

export const TopNav = React.createClass({
  render() {
    let html = <nav className="navbar navbar-light bg-faded">
      <IndexLink to='/' className="navbar-brand">Estereobit</IndexLink>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <BtnSignup />
        </li>
        <li className="nav-item">
          <BtnLogin />
        </li>
      </ul>
    </nav>
    return html
  }
})
