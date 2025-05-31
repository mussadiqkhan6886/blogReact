import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
  return (
    <nav>
      <form className='p-2 px-4' onSubmit={e => e.preventDefault()}>
          <input className='border rounded px-2 py-1 focus:bg-amber-400 w-full outline-0' type="text" placeholder='Search post' value={search} onChange={e => setSearch(e.target.value)} />
      </form>
      <ul className='flex justify-center gap-10'>
        <li className='hover:bg-amber-400 p-2 px-4'><Link to={"/"}>Home</Link></li>
        <li className='hover:bg-amber-400 p-2 px-4'><Link to={"/post"}>Post</Link></li>
        <li className='hover:bg-amber-400 p-2 px-4'><Link to={"/about"}>About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
