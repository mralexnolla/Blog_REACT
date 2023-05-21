import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
    <h1>404</h1>
    <p>That page does exists </p>
    
    <Link to='/'>Go to home page... </Link>

      
    </div>
  )
}

export default NotFound
