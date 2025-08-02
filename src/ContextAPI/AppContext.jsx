import { baseUrl } from '../baseUrl.js';
import React from 'react';
import { useState } from 'react';

export const AppContext = React.createContext();
// initialize context variable
export const AppProvider = ({ children }) => {

    const[loading, setLoading] = useState(false);
    const[page, setPage] = useState(null);
    const[totalPage, setTotalPage] = useState(null);
    const[blogs, setBlogs] = useState([]);

//fill variables with data
async function fetchBlogs(page=1) {
    setLoading(true);  
    const url=`${baseUrl}?page=${page}`; 
    try{
        const response= await fetch(url);
        const result = await response.json();
        console.log(result);
        setPage(result.page);
        setTotalPage(result.totalPages);
        setBlogs(result.posts);

    }catch(error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]); // Set to empty array on error
        setPage(1); // Reset page on error
        setTotalPage(null); // Reset total pages on error

    }
    setLoading(false);
}

function pageHandler(page){
    setPage(page);
    fetchBlogs(page);
}

// return variable
const value={
    loading,
    setLoading,
    page,
    setPage,
    totalPage,
    setTotalPage,
    blogs,
    setBlogs,
    fetchBlogs,
    pageHandler

}

return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    };
