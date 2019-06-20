import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL =
  'https://sdg-staff-directory-app.herokuapp.com/api/Liv%20Media/Employees'

export default function GetEmployee() {
  const [employeeList, listEmployee] = useState([])

  useEffect(() => {
    console.log({ listEmployee })
    axios.get(`${API_URL}`, listEmployee).then(resp => {
      listEmployee(resp.data)
    })
  }, [])

  return (
    <>
      <table>
        <tbody>
          {employeeList.map(person => (
            <tr className="employee-listing" key={person.id}>
              <td>
                <Link to={`/SingleEmployee/${person.id}`}>
                  <p className="first"> {person.firstName} </p>
                  <p className="last"> {person.lastName} </p>
                </Link>
              </td>
              <p className="title"> {person.jobTitle} </p>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
