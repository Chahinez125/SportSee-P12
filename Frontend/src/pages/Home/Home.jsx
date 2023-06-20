import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  const users = [
    { id: 12, name: "Karl" },
    { id: 18, name: "Cecilia" }
  ];

  return (
    <div>
      <Header />
      <div className="select_user">
        <h2>Selectionner un utilisateur</h2>
      </div>

      <div className="user">
        {users.map(user => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <div className={`user_${user.id}`}>User {user.id} - {user.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
