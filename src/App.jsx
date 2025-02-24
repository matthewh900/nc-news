import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router"
import Header from './Header'
import Navbar from './Navbar'
import ArticlesList from './ArticlesList'
import ArticlePage from './ArticlePage'
import TopicPage from './TopicPage'
import Homepage from './Homepage'

function App() {
  const [topicQuery, setTopicQuery] = useState(null)
  
  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/articles' element={<ArticlesList topicQuery={topicQuery} setTopicQuery={setTopicQuery}/>}></Route>
          <Route path='/article-page/:articleId' element={<ArticlePage/>}></Route>
          <Route path='/topics' element={<TopicPage setTopicQuery={setTopicQuery}/>}></Route>
        </Routes>
        <Navbar/>
    </>
  )
}

export default App
