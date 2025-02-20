import {useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import { getComments, postComment } from "./api";

function CommentSection() {
    const {articleId} = useParams()
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")
    const [commentPosted, setCommentPosted] = useState(true)
    const [deleted, setDeleted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        getComments({articleId})
        .then((articlesComments) => {
            setComments(articlesComments)
        }).catch((err) => {
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }, [commentPosted, deleted])

    function handleSubmit(e) {
        e.preventDefault()
        setCommentPosted(!commentPosted)
        setLoading(true)
        postComment({articleId, newComment}).then((res) => {
            setNewComment("")
        }).catch((err) => {
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Sorry, something went wrong</p>;

    return <>
    <form className="write-comment" onSubmit={handleSubmit}>
        <textarea className="comment-input" placeholder="Type comment here" value={newComment} onChange={(e) => setNewComment(e.target.value)} required></textarea>
        <input type="submit"></input>
    </form>
    <ul>
    {comments.map((comment) => {
        return <CommentCard comment={comment} setDeleted={setDeleted} key={comment.comment_id}/>
    })}
    </ul>
    </>
}

export default CommentSection