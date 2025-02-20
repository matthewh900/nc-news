import { Link } from "react-router";

function ArticleCard({article, setArticleId}) {
    return <>
    <div className="article-card">
        <p className="article-title">{article.title}</p>
        <p className="overview">{article.body}</p>
        <p className="topic">{article.topic}</p>
        <Link to={`/article-page/${article.article_id}`} ><button className="read-more-button">Click to read more</button></Link>
    </div>
    </>
}

export default ArticleCard