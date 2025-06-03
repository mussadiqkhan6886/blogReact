import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const Edit = () => {
   const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const {posts, post, setPosts, setTitleValue, setBodyValue} = useContext(DataContext)
  const nav = useNavigate()

  const handleEdit = async (id) => {
    try{     
      const now = new Date()
      const opt = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      }
      const updatedData = {id, title: editTitle, datetime: now.toLocaleString('en-US', opt), body: editBody}
      const response = await post.put('posts/'+id, updatedData)
      setPosts(posts.map(blog => blog.id == id ? {...response.data} : blog))
      setTitleValue('')
      setBodyValue('')
    }catch(err){
      console.log(err)
    }
    
    nav('/')
  }
  const {id} = useParams()
  const blog = posts.find((post) => (post.id).toString() === id)
  useEffect(() => {
    if(blog){
      setEditBody(blog.body)
      setEditTitle(blog.title)
    }
  }, [blog, setEditTitle, setEditBody])
  return (
    <main className=' p-3 h-[80%] overflow-auto'>
      {editTitle && 
      <>
        <h1 className='font-medium text-xl mb-4'>Edit Post</h1>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-1 '>
          <label htmlFor="title">Title: </label>
          <input required className='border p-2 py-1 mb-4 outline-none' type="text" id='title' placeholder='Enter Title' value={editTitle} onChange={e => setEditTitle(e.target.value)} />
          <label htmlFor="body">Body:</label>
          <textarea required className='border p-2 h-36 py-1 mb-4 outline-none' type="text" id='body' placeholder='Enter Blog' value={editBody} onChange={e => setEditBody(e.target.value)} />
          <button className='border border-black p-3 cursor-pointer hover:bg-black hover:text-white' onClick={() => handleEdit(blog.id)}>Submit</button>
        </form>
      </>}
      {!editTitle && 
        <>
          <h1 className='font-medium text-xl mb-2 mt-4'>Post Not Found</h1>
          <p>Well thats disappointing</p>
          <p className='underline text-blue-800 mt-3'>
          <Link to={"/"}>Visit our Homepage</Link>
          </p>
        </>
      }
     
    </main>
  )
}

export default Edit
