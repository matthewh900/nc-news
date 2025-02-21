import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getTopics } from "./api"

function TopicPage({setTopicQuery}) {
    const navigate = useNavigate()
    const [topics, setTopics] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        getTopics().then((topics) => {
            setTopics(topics)
        }).catch((err) => {
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Sorry, something went wrong</p>

    return <>
    <div className="topics-container">
        {topics.map((topic) => {
            return <button className="topic-button" key={topic.slug} onClick={() => {setTopicQuery(`${topic.slug}`)
                navigate("/")
            }}>{topic.slug}: {topic.description}</button>
        })}
    </div>
    </>
}

export default TopicPage