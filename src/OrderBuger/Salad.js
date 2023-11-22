import React, { Component } from 'react'
import './Burger.css'
export default class Salad extends Component {
  render() {
    return (
      <div className="lettuce">
        <div>
          <div className="half-circle"  />
          <div className="half-circle" style={{ left: '20%' }}/>
          <div className="half-circle"  style={{ left: '40%' }}/>
          <div className="half-circle" style={{ right: '20%' }}/>
          <div className="half-circle" style={{ right: '0' }}/>
        </div>

      </div>
    )
  }
}
