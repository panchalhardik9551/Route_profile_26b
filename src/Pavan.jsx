import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Pavan() {
  return (<>
    <ul>
    <li><NavLink className="navbar-link" to="/profile/hardik">Hardik</NavLink></li>
    <li><NavLink className="navbar-link" to="/profile/pavan">Pavan</NavLink></li>
    <li><NavLink className="navbar-link" to="/profile/darshan">Darshan</NavLink></li>
  </ul>

  <section>
  <h1>Pavan Trivedi</h1>
  </section></>
  )
}
