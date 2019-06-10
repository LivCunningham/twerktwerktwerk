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
            placeholder="First Name"
            onChange={e => {
              setEmployee(oldData => {
                oldData.firstName = e.target.value
                return oldData
              })
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={e => {
              setEmployee(oldData => {
                oldData.lastName = e.target.value
                return oldData
              })
            }}
          />
          <input
            type="text"
            placeholder="Full-Time or Part-Time"
            onChange={e => {
              setEmployee(oldData => {
                oldData.isFullTime = e.target.value
                return oldData
              })
            }}
          />
          <input
            type="text"
            placeholder="Job Title"
            onChange={e => {
              setEmployee(oldData => {
                oldData.jobTitle = e.target.value
                return oldData
              })
            }}
          />
          <input
            type="text"
            placeholder="Birthday"
            onChange={e => {
              setEmployee(oldData => {
                oldData.birthday = e.target.value
                return oldData
              })
            }}
          />
          <input
            type="text"
            placeholder="Hired Date"
            onChange={e => {
              setEmployee(oldData => {
                oldData.hiredDate = e.target.value
                return oldData
              })
            }}
          />
          <input
            type="text"
            placeholder="Job Description"
            onChange={e => {
              setEmployee(oldData => {
                oldData.jobDescription = e.target.value
                return oldData
              })
            }}
          />
          <input
            type="text"
            placeholder="Phone Number"
            onChange={e => {
              setEmployee(oldData => {
                oldData.phoneNumber = e.target.value
                return oldData
              })
            }}
          />
          <input
            type="text"
            placeholder="Address"
            onChange={e => {
              setEmployee(oldData => {
                oldData.address = e.target.value
                return oldData
              })
            }}
          />
          <button>+</button>
        </form>
      </section>
      {/* <Link to={`/GetEmployee`}>
        <button>See Full List of Twerkers</button>
      </Link> */}
    </>
  )
}
