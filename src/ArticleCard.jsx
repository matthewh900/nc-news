function ArticleCard({article}) {
    return <>
        <p className="article-title">{article.title}</p>
        <p className="overview">{article.body}</p>
        <p className="topic">{article.topic}</p>
    </>
}

export default ArticleCard