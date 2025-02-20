import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router"
import Header from './Header'
import Navbar from './Navbar'
import ArticlesList from './ArticlesList'
import ArticlePage from './ArticlePage'
import TopicPage from './TopicPage'
import Homepage from './Homepage'
import SortingPage from './SortingPage'

function App() {
  const [articleId, setArticleId] = useState(null)
  const [topicQuery, setTopicQuery] = useState(null)
  const [sortQuery, setSortQuery] = useState(null)
  const [orderQuery, setOrderQuery] = useState(null)
  
  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/articles' element={<ArticlesList setArticleId={setArticleId} topicQuery={topicQuery} sortQuery={sortQuery} orderQuery={orderQuery}/>}></Route>
          <Route path='/sort-page' element={<SortingPage setSortQuery={setSortQuery} setOrderQuery={setOrderQuery}/>}></Route>
          <Route path='/article-page/:articleId' element={<ArticlePage/>}></Route>
          <Route path='/topics' element={<TopicPage setTopicQuery={setTopicQuery}/>}></Route>
        </Routes>
        <Navbar/>
    </>
  )
}

export default App
