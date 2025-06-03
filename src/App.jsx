import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Missing from "./Components/Missing";
import Nav from "./Components/Nav";
import NewPost from "./pages/NewPost";
import PostPage from "./Components/PostPage";
import About from "./pages/About";
import Home from "./pages/Home";
import post from "./api/post"
import Edit from './pages/Edit';

const App = () => {
  const nav = useNavigate()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await post.get("posts");
        setPosts(response.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    const response = await post.delete("posts/"+id)
    setPosts(response.data)
    nav("/")
  }

  const [titleValue, setTitleValue] = useState("")
  const [bodyValue, setBodyValue] = useState("")

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
      const id = posts.length ?  posts[posts.length - 1].id + 1 : 1
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
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    const filtered = posts.filter((post) => post.body.toLowerCase().includes(search.toLowerCase()) || post.title.toLowerCase().includes(search.toLowerCase()))
    setSearchResult(filtered.reverse())
  }, [posts, search])

  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')

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
      setPosts(posts.map(post => post.id == id ? {...response.data} : post))
      setTitleValue('')
      setBodyValue('')
    }catch(err){
      console.log(err)
    }
    
    nav('/')
  }
  return (
    <div className="shadow-2xl w-full h-dvh">
      <Header />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home posts={searchResult} />} />
        <Route path='/post' element={<NewPost handleSubmit={handleSubmit} titleValue={titleValue} setTitleValue={setTitleValue} bodyValue={bodyValue} setBodyValue={setBodyValue} />} />
        <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path='/edit/:id' element={<Edit posts={posts} handleEdit={handleEdit} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody} />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
