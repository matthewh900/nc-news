import { useNavigate } from "react-router";

function ArticleCard({article, setArticleId}) {
    const navigate = useNavigate()

    return <>
    <div className="article-card">
        <p className="article-title">{article.title}</p>
        <p className="overview">{article.body}</p>
        <p className="topic">{article.topic}</p>
        <button className="read-more-button" onClick={() => {
            setArticleId(article.article_id)
            navigate("/article-page")}}>Click to read more</button>
    </div>
    </>
}

export default ArticleCard