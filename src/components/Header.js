import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="Join"> JOIN THE PAWNEE PARKS TEAM</h1>
          <h2 className="sub-title">
            Home of the World Famous
            <span className="Julia-Roberts">Julia Roberts</span>
            Lawsuits
          </h2>
          <Link to={`/GetEmployee`}>
            <button className="see-full">
              See Full List of Pawnee Employees
            </button>
          </Link>
        </header>
      </div>
    )
  }
}

export default Header
