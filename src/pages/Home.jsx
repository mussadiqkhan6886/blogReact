import React, { useContext } from 'react'
import Feed from '../Components/Feed'
import { DataContext } from '../context/DataContext'

const Home = () => {
  const {searchResult} = useContext(DataContext)
  return (
    <main className='overflow-auto bg-white h-[80%] p-3'>
      {searchResult.length ? (
          <Feed posts={searchResult}/>
      ) : (
        <p>No Posts yet...</p>
      )}
    </main>
  )
}

export default Home
