import { createContext } from "react";
import React, { useEffect, useState } from 'react';
import post from "../api/post"

export const DataContext = createContext()

export const DataProvider = ({children}) => {

    const [search, setSearch] = useState('')
    const [posts, setPosts] = useState([])
    const [titleValue, setTitleValue] = useState("")
    const [bodyValue, setBodyValue] = useState("")

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
  
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    const filtered = posts.filter((post) => post.body.toLowerCase().includes(search.toLowerCase()) || post.title.toLowerCase().includes(search.toLowerCase()))
    setSearchResult(filtered.reverse())
  }, [posts, search]);

    return (<DataContext.Provider value={
        {searchResult, setPosts, post, setSearch, search, posts, titleValue, setTitleValue, bodyValue, setBodyValue}
    }>
        {children}
    </DataContext.Provider>)
}
