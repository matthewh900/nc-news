import ArticleCard from "./ArticleCard"
import { useState, useEffect } from "react"
import { Link } from "react-router"
import axios from "axios"

function ArticlesList({setArticleId}) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get("https://be-nc-news-mh.onrender.com/api/articles").then((res) => {
            setArticles(res.data.article)
        }).catch((err) => {
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Sorry, something went wrong</p>

    return <>
        <div className="articles-list">
            <ul>{articles.map((article) => {
                return <ArticleCard article={article} setArticleId={setArticleId} key={article.article_id}/>
            })}
            </ul>
        </div>
    </>
}

export default ArticlesList