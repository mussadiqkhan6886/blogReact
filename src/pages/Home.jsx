import React, { useContext } from 'react'
import Feed from '../Components/Feed'
import { DataContext } from '../context/DataContext'

const Home = () => {
  const {searchResult, isLoading, error} = useContext(DataContext)
  return (
    <main className='overflow-auto bg-white h-[80%] p-3'>
      {isLoading && <p>loading posts....</p>}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && (searchResult.length ? (
          <Feed posts={searchResult}/>
      ) : (
        <p>No Posts yet...</p>
      ))}
    </main>
  )
}

export default Home
