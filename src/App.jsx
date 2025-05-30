import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Missing from "./Components/Missing";
import Nav from "./Components/Nav";
import NewPost from "./pages/NewPost";
import PostPage from "./Components/PostPage";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<NewPost />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
