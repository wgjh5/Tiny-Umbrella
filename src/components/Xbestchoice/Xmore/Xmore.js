import React, { Component } from 'react'
import './Xmore.css'



class Xmore extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
          <div className="more">
            <a className="more_btn" data-index="1">查看更多成人保险产品&gt;</a>
            <a className="more_btn hide" data-index="2">查看更多少儿保险产品&gt;</a>
            <a className="more_btn hide" data-index="3">查看更多父母保险产品&gt;</a>
        </div>
      </div>
    )
  }
}

export default Xmore
