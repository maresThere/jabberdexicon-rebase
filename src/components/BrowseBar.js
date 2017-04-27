import React from 'react'
import { NavLink } from 'react-router-dom'

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split('')
const BrowseBar = () =>

  <div className='alpha'>
    <ul>
      {ALPHA.map((letter) => (
        <li key={letter}>
          <NavLink to={`/browse/${letter}`}>{letter}</NavLink>
        </li>
          ))}
      <li><NavLink to='/browse/0'>#</NavLink></li>
    </ul>
  </div>

export default BrowseBar
