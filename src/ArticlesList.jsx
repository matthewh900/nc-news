import ArticleCard from "./ArticleCard"
import SortingPage from "./SortingPage"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { getArticles } from "./api"

function ArticlesList({topicQuery}) {
    const [articles, setArticles] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const sortQuery = searchParams.get("sort_by")
    const orderQuery = searchParams.get("order")
    const [submit, setSubmit] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const setOrderQuery = (direction) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("order", direction);
        setSearchParams(newParams);
    }

    const setSortQuery = (category) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("sort_by", category);
        setSearchParams(newParams);
    }

    useEffect(() => {
        setLoading(true)
        getArticles({topicQuery, sortQuery, orderQuery}).then((articles) => {
            setArticles(articles)
        }).catch((err) => {
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }, [topicQuery, submit])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Sorry, something went wrong</p>

    return <>
        <div className="articles-container">
            <div className="sort-area">
                <SortingPage setOrderQuery={setOrderQuery} setSortQuery={setSortQuery} submit={submit} setSubmit={setSubmit}/>
            </div>
            <ul>{articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
            </ul>
        </div>
    </>
}

export default ArticlesList