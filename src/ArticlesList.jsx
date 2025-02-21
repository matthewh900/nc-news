import ArticleCard from "./ArticleCard"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getArticles } from "./api"

function ArticlesList({topicQuery, sortQuery, orderQuery}) {
    const navigate = useNavigate()
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        getArticles({topicQuery, sortQuery, orderQuery}).then((articles) => {
            setArticles(articles)
        }).catch((err) => {
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }, [topicQuery, sortQuery, orderQuery])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Sorry, something went wrong</p>

    return <>
        <div className="articles-container">
            <button className="sort-page-button" onClick={() => navigate("/sort-page")}>Sort By</button>
            <ul>{articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
            </ul>
        </div>
    </>
}

export default ArticlesList