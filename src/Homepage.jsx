import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getUsersArticles } from "./api";
import UserCard from "./UserCard";

function Homepage() {
  const [userArticles, setUserArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsersArticles()
      .then((articles) => {
        setUserArticles(articles);
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
    <div className="user-info">
        <UserCard/>
    </div>
      <div className="articles-container">
        <ul>
          {userArticles.map((article) => {
            return (
              <ArticleCard
                article={article}
                key={article.article_id}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Homepage;
