import React from 'react'
import useFetch from './useFetch'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


const BlogsDetails = () => {
    const {id} = useParams()
    const { data: blog, error, isLoading } = useFetch("http://localhost:8000/blogs/" + id);

    const navigate = useNavigate()
    
    const handleDelete = (id) => {
      fetch("http://localhost:8000/blogs/" + blog.id, {
        method: "DELETE",
      })
      .then(() => navigate("/"));
    }


  return (
    <div className='blog-details'>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
         <h2>{blog.title}</h2>
         <p>Writen by {blog.author}</p>
         <div>{blog.body}</div>
         <button onClick={handleDelete}>delete</button>
        </article>
      )}
      
    </div>
  )
}

export default BlogsDetails
