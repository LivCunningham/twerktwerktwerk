import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function SingleEmployee(props) {
  const [employee, setEmployee] = useState([])

  let id = props.match.params.personID
  const API_URL = `https://sdg-staff-directory-app.herokuapp.com/api/Liv%20Media/Employees/${id}`

  useEffect(() => {
    axios.get(`${API_URL}`, employee).then(resp => {
      setEmployee(resp.data)
      // console.log(resp.data)
      // console.log({ employee })
      // console.log({ setEmployee })
    })
  }, [])

  const deleteEmployee = id => {
    axios.delete(`${API_URL}`, employee).then(resp => {
      setEmployee(oldEmployee => oldEmployee.filter(person => person.id !== id))
    })
  }

  return (
    <>
      <ul className="employee-listing">
        <li className="first">
          <p> {employee.firstName} </p>
        </li>
        <li className="last">
          <p>{employee.lastName} </p>
        </li>
        <li>
          <p>{employee.birthday} </p>
        </li>
        <li>
          <p>{employee.hireDate} </p>
        </li>
        <li className="isFullTime">
          <p>{employee.isFullTime ? 'Full-time' : 'Part-time'}</p>
        </li>
        <li className="title">
          <p>{employee.jobTitle} </p>
        </li>
        <li>
          <p>{employee.phoneNumber} </p>
        </li>
        <button classname="Fire-Me" onClick={deleteEmployee}>
          Fire Me!
        </button>
      </ul>
    </>
  )
}
