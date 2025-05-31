import React from 'react'
import Feed from '../Components/Feed'

const Home = ({posts}) => {
  return (
    <div className='min-h-[350px] p-3'>
      {posts.length ? (
          <Feed posts={posts}/>
      ) : (
        <p>No Posts yet...</p>
      )}
    </div>
  )
}

export default Home
