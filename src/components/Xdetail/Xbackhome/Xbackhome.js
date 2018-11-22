import React, { Component } from 'react'
import './Xbackhome.scss'
import { Link } from 'react-router-dom'



class Xbackhome extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (

        <div data-ass="drop" className="fixed-drop iphonex_margin">
            <div className="drop drop-top main_drop">
                <Link to="/" className="drop-btn">
                    <i data-track="detail_backhome"></i>
                </Link>
            </div>
        </div>

    )
  }
}

export default Xbackhome
