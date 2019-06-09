import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL =
  'https://sdg-staff-directory-app.herokuapp.com/api/Liv%20Media/Employees'

export default function GetEmployee() {
  const [employee, setEmployee] = useState({})
  const [theEmployee, GetEmployee] = useState({})

  const getATwerker = e => {
    let employee = this.props.match.params.id
    e.preventDefault()
    console.log({ GetEmployee })
    axios.get(`${API_URL}`, GetEmployee).then(resp => {
      GetEmployee(resp.data)
    })
  }

  return (
    <>
      let GetEmployee
      <section>
        <ul>
          <li>
            firstName: {employee.firstName},{employee.lastName}{' '}
          </li>
        </ul>
      </section>
    </>
  )
}
