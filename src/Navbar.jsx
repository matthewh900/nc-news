import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/articles">
          <button>Articles</button>
        </Link>
        <Link to="/topics">
          <button>Topics</button>
        </Link>
        <button>Create</button>
        <Link to="/">
          <button>Home</button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
