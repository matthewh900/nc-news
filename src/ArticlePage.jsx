import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
import CommentSection from "./CommentSection";
import { getArticleById, patchArticleVotes } from "./api";

function ArticlePage() {
  const {articleId} = useParams()
  const [chosenArticle, setChosenArticle] = useState({});
  const [isVisible, setIsVisible] = useState(false)
  const [currVotes, setCurrVotes] = useState(0)
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

  function handleVotes() {
    setCurrVotes(currVotes + 1)
    patchArticleVotes({articleId})
  }

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
          <button className="votes-button" onClick={handleVotes}>Votes: {currVotes + chosenArticle.votes}</button>
          <button className="comment-button" onClick={() => {setIsVisible(!isVisible)}}>
            Comments: {chosenArticle.comment_count}
          </button>
        </div>
      </div>
      {isVisible ? <div className="comment-section">
        <CommentSection/>
      </div> : null}
    </>
  );
}

export default ArticlePage;
