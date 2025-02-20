import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router"
import Header from './Header'
import Navbar from './Navbar'
import ArticlesList from './ArticlesList'
import ArticlePage from './ArticlePage'

function App() {
  const [articleId, setArticleId] = useState(null)

  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<ArticlesList setArticleId={setArticleId}/>}></Route>
          <Route path='/article-page/:articleId' element={<ArticlePage/>}></Route>
        </Routes>
        <Navbar/>
    </>
  )
}

export default App
