import {useState, useEffect} from "react"
import axios from "axios"
import CommentCard from "./CommentCard";
import { getComments } from "./api";

function CommentSection({articleId}) {
    const [comments, setComments] = useState([])
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
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Sorry, something went wrong</p>;

    return <ul>
    {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id}/>
    })}
    </ul>
}

export default CommentSection