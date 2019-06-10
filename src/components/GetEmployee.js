import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL =
  'https://sdg-staff-directory-app.herokuapp.com/api/Liv%20Media/Employees'

export default function GetEmployee() {
  const [employeeList, listEmployee] = useState([])

  useEffect(() => {
    console.log({ listEmployee })
    axios.get(`${API_URL}`, listEmployee).then(resp => {
      listEmployee(resp.data)
      debugger
      // listEmployee(oldList => oldList.concat(resp.data))
      // employeeList = resp.data
    })
  }, [])

  return (
    <>
      <section>
        <ul className="employee-listing">
          {employeeList.map(person => (
            <tr>
              <td> {person.firstName} </td>
              <td> {person.lastName} </td>
              <td> {person.birthday} </td>
              <td> {person.hireDate} </td>
              <td> {person.isFullTime} </td>
              <td> {person.jobTitle} </td>
              <td> {person.phoneNumber} </td>
            </tr>
          ))}
        </ul>
      </section>
    </>
  )
}
