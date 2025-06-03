import { createContext } from "react";
import React, { useEffect, useState } from 'react';
import post from "../api/post"
import useAxios from "../hooks/useAxios";

export const DataContext = createContext({})

export const DataProvider = ({children}) => {

  const [searchResult, setSearchResult] = useState([])
    const [search, setSearch] = useState('')
    const [posts, setPosts] = useState([])
    const [titleValue, setTitleValue] = useState("")
    const [bodyValue, setBodyValue] = useState("")
    const {data, isLoading, error} = useAxios("http://localhost:3500/posts")

  useEffect(() => {
    setPosts(data)
  }, [data])
  

  useEffect(() => {
    const filtered = posts.filter((post) => post.body.toLowerCase().includes(search.toLowerCase()) || post.title.toLowerCase().includes(search.toLowerCase()))
    setSearchResult(filtered.reverse())
  }, [posts, search]);

    return (<DataContext.Provider value={
        {searchResult, setPosts, post, setSearch, search, posts, titleValue, setTitleValue, bodyValue, setBodyValue, isLoading, error}
    }>
        {children}
    </DataContext.Provider>)
}
