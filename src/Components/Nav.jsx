import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const Nav = () => {
  const {search, setSearch} = useContext(DataContext)
  return (
    <nav className='bg-gray-200 sm:flex sm:items-center px-1 sm:justify-between'>
      <form onSubmit={e => e.preventDefault()}>
          <input className='border mt-1 rounded border-gray-400 px-2 py-1 focus:bg-gray-600 focus:text-white w-full outline-0' type="text" placeholder='Search post' value={search} onChange={e => setSearch(e.target.value)} />
      </form>
      <ul className='flex justify-center'>
        <li className='hover:bg-gray-400 hover:text-white p-2 px-4'><Link to={"/"}>Home</Link></li>
        <li className='hover:bg-gray-400 hover:text-white p-2 px-4'><Link to={"/post"}>Post</Link></li>
        <li className='hover:bg-gray-400 hover:text-white p-2 px-4'><Link to={"/about"}>About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
