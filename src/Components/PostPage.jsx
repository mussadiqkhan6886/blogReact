import React, { useContext } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const PostPage = () => {
  const {id} = useParams()
  const {posts, post, setPosts} = useContext(DataContext)
  const find = posts.find((post) => post.id.toString() === id)
  const nav = useNavigate()

   const handleDelete = async (id) => {
    try{
      await post.delete("posts/" + id);
      setPosts(posts.filter((p) => p.id.toString() !== id));
      nav("/");
    }catch(err){
      console.log(err)
    }
    
  }
  
  return (
    <main className='h-[80%] p-3'>
      {find &&
    <>
      <h3 className='font-medium text-xl mb-2'>{find.title}</h3>
      <p className='mb-2'>{find.body}</p>
      <p className='text-[12px] text-gray-700'>{find.datetime}</p>
      <button className='bg-red-600 text-white hover:bg-red-700 mt-4 cursor-pointer px-3 py-1' onClick={() => handleDelete(id)}>Delete</button>
      <button className='bg-blue-600 ml-2 text-white hover:bg-blue-700 mt-4 cursor-pointer px-3 py-1'><Link to={"/edit/"+find.id}>Edit Post</Link></button>
    </>}
    {!find && 
    <>
      <h1 className='font-medium text-xl mb-2 mt-4'>Post Not Found</h1>
        <p>Well thats disappointing</p>
        <p className='underline text-blue-800 mt-3'>
        <Link to={"/"}>Visit our Homepage</Link>
        </p>
      </>}
    </main>
    
  )
}

export default PostPage
