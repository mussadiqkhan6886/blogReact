import { Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Missing from "./Components/Missing";
import Nav from "./Components/Nav";
import NewPost from "./pages/NewPost";
import PostPage from "./Components/PostPage";
import About from "./pages/About";
import Home from "./pages/Home";
import Edit from './pages/Edit';
import { DataProvider } from './context/DataContext';

const App = () => {
  
  return (
    <div className="shadow-2xl w-full h-dvh">
      <Header />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post' element={<NewPost  />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
};

export default App;
