import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost/wpapi/wp-json/wp/v2/posts?_embed') // change this path!
      .then((res) => setPosts(res.data))
  }, [])

  const postsJsx = posts.map((post) => (
    <li key={post.id} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></li>
  ))

  return (
    <ul>{postsJsx}</ul>
  )
}

export default App;
