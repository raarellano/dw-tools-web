import React from 'react'

export const BtnLearnMore = React.createClass({

  render() {
    let html = (
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#learn-more-modal">
        Learn More
      </button>
    )
    return html
  }

})
