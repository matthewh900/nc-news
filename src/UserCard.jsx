import { useState, useEffect } from "react";
import { getUsers } from "./api";

function UserCard() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((userArr) => {
        setUsers(userArr.filter((allUsers) => allUsers.username === "weegembump"))
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Sorry, something went wrong</p>
    
    return <div className="user-card">
        {users.map((user) => {
            return <div key={user.name}>
            <img src={user.avatar_url} alt="profile picture" className="profile-picture"/>
            <p className="username">{user.username}</p>
            <p className="real-name">{user.name}</p>
            </div>
        })}
    </div>
}

export default UserCard