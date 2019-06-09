import React, { useState, useEffect } from 'react'
import Header from '../components/Header.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function AllTwerkers() {
  const [employee, setEmployee] = useState({})
  return (
    <>
      <h1> this page will house all the twerkers. </h1>
    </>
  )
}
