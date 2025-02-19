function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p className="comment-author">{comment.author}</p>
      <p className="comment-body">{comment.body}</p>
      <button className="up-vote">▲</button>
      <p className="comment-votes">Votes: {comment.votes}</p>
      <button className="down-vote">▼</button>
    </div>
  );
}

export default CommentCard;
