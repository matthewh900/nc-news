import axios from "axios"

export const getArticles = () => {
    return axios.get("https://be-nc-news-mh.onrender.com/api/articles").then((res) => {
        return res.data.article
    })
}

export const getArticleById = ({articleId}) => {
    return axios.get(`https://be-nc-news-mh.onrender.com/api/articles/${articleId}`).then((res) => {
        return res.data.article
    })
}

export const getComments = ({articleId}) => {
    return axios.get(`https://be-nc-news-mh.onrender.com/api/articles/${articleId}/comments`).then((res) => {
        return res.data.comments
    })
}

export const patchArticleVotes = ({articleId}) => {
    return axios.patch(`https://be-nc-news-mh.onrender.com/api/articles/${articleId}`, {inc_votes: 1})
}

export const postComment = ({articleId, newComment}) => {
    return axios.post(`https://be-nc-news-mh.onrender.com/api/articles/${articleId}/comments`, {author: "weegembump", body: newComment})
}