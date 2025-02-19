import { use, useEffect, useState } from "react";
import axios from "axios";
import CommentSection from "./CommentSection";
import { getArticleById } from "./api";

function ArticlePage({ articleId }) {
  const [chosenArticle, setChosenArticle] = useState({});
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticleById({articleId})
      .then((article) => {
        setChosenArticle(article);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Sorry, something went wrong</p>;

  return (
    <>
      <div className="articles-container">
        <div className="article-card">
          <h2 className="chosen-article-title">{chosenArticle.title}</h2>
          <p className="date-created">{chosenArticle.created_at}</p>
          <p className="article-author">{chosenArticle.author}</p>
          <img
            src={chosenArticle.article_img_url}
            alt="image relating to article"
          />
          <p className="article-body">{chosenArticle.body}</p>
          <button className="votes-button">Votes: {chosenArticle.votes}</button>
          <button className="comment-button" onClick={() => {setIsVisible(!isVisible)}}>
            Comments: {chosenArticle.comment_count}
          </button>
        </div>
      </div>
      {isVisible ? <div className="comment-section">
        <CommentSection articleId={articleId}/>
      </div> : null}
    </>
  );
}

export default ArticlePage;
