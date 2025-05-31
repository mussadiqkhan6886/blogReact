import React from 'react'
import {Link, useParams } from 'react-router-dom'

const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams()
  const find = posts.find((post) => post.id.toString() === id)
  
  return (
    <main className='min-h-[350px] max-w-[450px] p-3'>
      {find &&
    <>
      <h3 className='font-medium text-xl mb-2'>{find.title}</h3>
      <p>{find.body}</p>
      <p>{find.datetime}</p>
      <button className='bg-red-600 text-white mt-4 cursor-pointer px-3 py-1' onClick={() => handleDelete(id)}>Handle Delete</button>
    </>}
    {!find && 
    <>
      <h1 className='font-medium text-xl mb-2'>Post Not Found</h1>
        <p>Well thats disappointing</p>
        <p className='underline text-blue-800 mt-3'>
        <Link to={"/"}>Visit our Homepage</Link>
        </p>
      </>}
    </main>
    
  )
}

export default PostPage
