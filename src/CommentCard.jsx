import { useState, useEffect } from "react";
import { deleteComment } from "./api";

function CommentCard({ comment, setComments, comments }) {
  const [commentId, setCommentId] = useState(null);
  const [deletable, setDeletable] = useState(false)

  useEffect(() => {
    {if(comment.author === "weegembump"){
        setCommentId(comment.comment_id)
        setDeletable(true)
    }}
  }, []);

  return (
    <div className="comment-card">
      <p className="comment-author">{comment.author}</p>
      <p className="comment-body">{comment.body}</p>
      <button className="up-vote">▲</button>
      <p className="comment-votes">Votes: {comment.votes}</p>
      <button className="down-vote">▼</button>
      {deletable ? <button
        className="delete-button"
        onClick={() => {
          setComments(comments.filter((thisComment) => thisComment.comment_id !== commentId));
          deleteComment({ commentId });
        }}
      >
        🗑️
      </button> : null}
    </div>
  );
}

export default CommentCard;
