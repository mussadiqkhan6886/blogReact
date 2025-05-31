import React from 'react'

const NewPost = ({handleSubmit, titleValue, setTitleValue, bodyValue, setBodyValue}) => {
  return (
    <div className='min-h-[350px] p-3'>
      <h1 className='font-medium text-xl text-amber-800'>New Post</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-1'>
        <label htmlFor="title">Title: </label>
        <input required className='border p-2 py-1 mb-4 outline-none' type="text" id='title' placeholder='Enter Title' value={titleValue} onChange={e => setTitleValue(e.target.value)} />
        <label htmlFor="body">Body:</label>
        <textarea required className='border p-2 py-1 mb-4 outline-none' type="text" id='body' placeholder='Enter Blog' value={bodyValue} onChange={e => setBodyValue(e.target.value)} />
        <button className='border border-black p-3 cursor-pointer hover:bg-amber-700 hover:text-white'>Submit</button>
      </form>
    </div>
  )
}

export default NewPost
