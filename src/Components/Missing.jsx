import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='h-[80%] p-3'>
      <h1 className='font-medium text-xl mb-2'>Page Not Found</h1>
        <p>Well thats disappointing</p>
        <p className='underline text-blue-800 mt-3'>
        <Link to={"/"}>Visit our Homepage</Link>
        </p>
    </main>
  )
}

export default Missing
