import React, { useState } from 'react'
import Header from '../components/Header.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL =
  'https://sdg-staff-directory-app.herokuapp.com/api/Liv%20Media/Employees'

export default function AddEmployee() {
  const [employee, setEmployee] = useState({})

  const addATwerker = e => {
    e.preventDefault()
    console.log({ employee })
    axios.post(`${API_URL}`, employee).then(resp => {
      setEmployee(resp.data)
    })
  }

  return (
    <>
      <Header />
      <section className="add-twerker">
        <form onSubmit={addATwerker}>
          <input
            type="text"
            placeholder="first name"
            onChange={e => {
              setEmployee(oldData => {
                oldData.firstName = e.target.value
                return oldData
              })
            }}
          />
          <input
            type="text"
            placeholder="last name"
            onChange={e => {
              setEmployee(oldData => {
                oldData.lastName = e.target.value
                return oldData
              })
            }}
          />
          <input
            type="text"
            placeholder="Fulltime or Part-time"
            onChange={e => {
              setEmployee(oldData => {
                oldData.isFullTime = e.target.value
                return oldData
              })
            }}
          />
          <input
            type="text"
            placeholder="Fulltime or Part-time"
            onChange={e => {
              setEmployee(oldData => {
                oldData.isFullTime = e.target.value
                return oldData
              })
            }}
          />

          <button>+</button>
        </form>
      </section>
      <Link to={`/GetEmployee`}>
        <button>See Full List of Twerkers</button>
      </Link>
    </>
  )
}
