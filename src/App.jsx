import { useState } from 'react'
import './App.css'
import Header from './Header'
import Navbar from './Navbar'
import ArticlesList from './ArticlesList'

function App() {

  return (
    <>
        <Header/>
        <ArticlesList/>
        <Navbar/>
    </>
  )
}

export default App
