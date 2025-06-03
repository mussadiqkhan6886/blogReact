import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { DataContext } from "../context/DataContext"
const NewPost = () => {
  
  const {posts, post, setPosts, bodyValue, setBodyValue, titleValue, setTitleValue} = useContext(DataContext)

  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
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
      const id = posts.length ?  String(parseInt(posts[posts.length - 1].id) + 1) : 1
      const newData = {id, title: titleValue, datetime: now.toLocaleString('en-US', opt), body: bodyValue}
      const response = await post.post('posts', newData)
      const allPosts = [...posts, response.data]
      setPosts(allPosts)
      setTitleValue('')
      setBodyValue('')
    }catch(err){
      console.log(err)
    }
    
    nav('/')
  }

  return (
    <main className=' p-3 h-[80%] overflow-auto'>
      <h1 className='font-medium text-xl mb-4'>New Post</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-1 '>
        <label htmlFor="title">Title: </label>
        <input required className='border p-2 py-1 mb-4 outline-none' type="text" id='title' placeholder='Enter Title' value={titleValue} onChange={e => setTitleValue(e.target.value)} />
        <label htmlFor="body">Body:</label>
        <textarea required className='border p-2 h-36 py-1 mb-4 outline-none' type="text" id='body' placeholder='Enter Blog' value={bodyValue} onChange={e => setBodyValue(e.target.value)} />
        <button className='border border-black p-3 cursor-pointer hover:bg-black hover:text-white'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost
