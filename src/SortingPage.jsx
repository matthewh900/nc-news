import { useState } from "react";

function SortingPage({setSortQuery, setOrderQuery, submit, setSubmit, setTopicQuery}) {

    function handleSubmit(e) {
        e.preventDefault()
        setTopicQuery(null)
        setSubmit(!submit)
    }

  return (
    <form className="sort-form" onSubmit={handleSubmit}>
      <select
        className="sort-select"
        id="sort-select"
        onChange={(e) => setSortQuery(e.target.value)}
      >
        <option value=""></option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <select
        className="order"
        id="order"
        onChange={(e) => setOrderQuery(e.target.value)}
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
