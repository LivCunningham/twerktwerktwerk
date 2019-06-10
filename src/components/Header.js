import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1> Add a Twerker</h1>
          <Link to={`/GetEmployee`}>
            <button>See Full List of Twerkers</button>
          </Link>
        </header>
      </div>
    )
  }
}

export default Header
