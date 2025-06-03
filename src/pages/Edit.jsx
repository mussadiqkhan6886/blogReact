import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const Edit = ({posts, handleEdit, editTitle,setEditTitle, editBody, setEditBody}) => {
  const {id} = useParams()
  const post = posts.find((post) => (post.id).toString() === id)
  useEffect(() => {
    if(post){
      setEditBody(post.body)
      setEditTitle(post.title)
    }
  }, [post, setEditBody, setEditBody])
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
          <button className='border border-black p-3 cursor-pointer hover:bg-black hover:text-white' onClick={() => handleEdit(post.id)}>Submit</button>
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
