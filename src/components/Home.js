import React from 'react'
import { PageHeader } from 'rebass'
import WOD from './WOD'

const Home = () =>
  <div className='Home'>
    <PageHeader
      heading='The Jabberdexicon!'
      description='A little glossary of jargon'
      m={1}
    />
    <WOD />
  </div>

export default Home
