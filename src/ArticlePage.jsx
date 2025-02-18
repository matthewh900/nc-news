import { useEffect, useState } from "react"
import axios from "axios"

function ArticlePage({articleId}) {
    const [chosenArticle, setChosenArticle] = useState({})

    useEffect(() => {
        axios.get(`https://be-nc-news-mh.onrender.com/api/articles/${articleId}`).then((res) => {
            setChosenArticle(res.data.article)
        })
    }, [])

    return <>
       <div className="article-card">
        <h2 className="chosen-article-title">{chosenArticle.title}</h2>
        <p className="article-author">{chosenArticle.author}</p>
        <img src={chosenArticle.article_img_url} alt="image relating to article"/>
        <p className="article-body">{chosenArticle.body}</p>
       </div>
    </>
}

export default ArticlePage