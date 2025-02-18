import ArticleCard from "./ArticleCard"
import { useState, useEffect } from "react"
import axios from "axios"

function ArticlesList() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get("https://be-nc-news-mh.onrender.com/api/articles").then((res) => {
            setArticles(res.data.article)
        })
    }, [])

    return <>
        <div className="articles-list">
            <h2>Articles</h2>
            <ul>{articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
            </ul>
        </div>
    </>
}

export default ArticlesList