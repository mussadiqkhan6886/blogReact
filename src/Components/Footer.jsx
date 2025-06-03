import React from 'react'

const Footer = () => {
  const today = new Date()
  return (
    <footer className='bg-gray-400 p-2 text-center'>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer
