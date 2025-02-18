function ArticleCard({article}) {
    return <>
    <div className="article-card">
        <p className="article-title">{article.title}</p>
        <p className="overview">{article.body}</p>
        <p className="topic">{article.topic}</p>
    </div>
    </>
}

export default ArticleCard