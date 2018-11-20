import React, { Component } from 'react'

import './Xpropblem.css'

class Xpropblem extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
        <div className="add_question">
        <a className="add_lc_pro" href="/question/faq">常见问题 &gt;</a>
        <span className="add_lc_l"></span>
        <a className="add_lc_sol" href="/question/adviceAndComplain">投诉建议 &gt;</a>
    </div>
    )
  }
}

export default Xpropblem
