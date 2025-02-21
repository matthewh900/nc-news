import { useState } from "react";
import { useNavigate } from "react-router-dom"

function SortingPage({setSortQuery, setOrderQuery}) {
  const navigate = useNavigate()
    const [sortValue, setSortValue] = useState("")
    const [orderValue, setOrderValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setSortQuery(sortValue)
        setOrderQuery(orderValue)
        navigate("/articles")
    }

  return (
    <form className="sort-form" onSubmit={handleSubmit}>
      <select
        className="sort-select"
        id="sort-select"
        onChange={(e) => setSortValue(e.target.value)}
      >
        <option value=""></option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <select
        className="order"
        id="order"
        onChange={(e) => setOrderValue(e.target.value)}
      >
        <option value=""></option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <input type="submit"></input>
    </form>
  );
}

export default SortingPage;
