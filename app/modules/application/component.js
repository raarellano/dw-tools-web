import React from 'react'
import { TopNav } from '../top-nav/component'
import { HomeComponent } from '../home/component'
import { SideBar } from '../side-bar/component'

export const App = React.createClass({
  render() {
    let html = <div id="application" className='container-fluid'>
      <div className='row'><TopNav /></div>
      <div className='row'>
        <div className='col-md-2'>
          <SideBar />
        </div>
        <div className='col-md-10'>
          {this.props.children || <HomeComponent />}
        </div>
      </div>
    </div>
    return html
  }
})
