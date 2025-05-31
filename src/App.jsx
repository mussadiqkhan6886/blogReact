import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Missing from "./Components/Missing";
import Nav from "./Components/Nav";
import NewPost from "./pages/NewPost";
import PostPage from "./Components/PostPage";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  const nav = useNavigate()
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first Post",
      datetime: "July 01, 2021 11:17:26 AM",
      body: "lorem ipsum dolar sit amet consectur aduptna adnau asdajsn  asdpjri dvffiirr dajno aoudnioand aisdn asodjasond"
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "July 02, 2021 11:17:26 AM",
      body: "lorem ipsum dolar sit amet consectur aduptna adnau asdajsn  asdpjri dvffiirr dajno aoudnioand aisdn asodjasond"
    },
    {
      id: 3,
      title: "My Third Post",
      datetime: "July 03, 2021 11:17:26 AM",
      body: "lorem ipsum dolar sit amet consectur aduptna adnau asdajsn  asdpjri dvffiirr dajno aoudnioand aisdn asodjasond"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 04, 2021 11:17:26 AM",
      body: "lorem ipsum dolar sit amet consectur aduptna adnau asdajsn  asdpjri dvffiirr dajno aoudnioand aisdn asodjasond"
    },
  ])
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id != id))
    nav("/")
  }

  const [titleValue, setTitleValue] = useState("")
  const [bodyValue, setBodyValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
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
    const allPosts = [...posts, newData]
    setPosts(allPosts)
    setTitleValue('')
    setBodyValue('')
    nav('/')
  }
  return (
    <div className="min-w-[400px] bg-amber-200 shadow-xl">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home posts={posts} />} />
        <Route path='/post' element={<NewPost handleSubmit={handleSubmit} titleValue={titleValue} setTitleValue={setTitleValue} bodyValue={bodyValue} setBodyValue={setBodyValue} />} />
        <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
