import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Alex");
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsLoading(true)

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsLoading(false);
      navigate('/')
    });
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog Authors</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="alex">Alex</option>
          <option value="nolla">Nolla</option>
          <option value="Faisal">Faisal</option>
          <option value="Ese">Ese</option>
          <option value="Roby & Catherine">Roby & Catherine</option>
        </select>

        {isLoading ? (
          <button disabled>Adding Blog...</button>
        ) : (
          <button>Add Blog</button>
        )}
      </form>
    </div>
  );
};

export default Create;
