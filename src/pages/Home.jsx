import React from 'react'
import Feed from '../Components/Feed'

const Home = ({posts}) => {
  return (
    <main className='overflow-auto bg-white h-[80%] p-3'>
      {posts.length ? (
          <Feed posts={posts}/>
      ) : (
        <p>No Posts yet...</p>
      )}
    </main>
  )
}

export default Home
