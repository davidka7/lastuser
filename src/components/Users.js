import "./Components.css";
import { Link } from "react-router-dom";
function Users({ user }) {
  return (
    <div className="card">
      <img
        alt="pics"
        style={{ width: "35%" }}
        src={`${user.picture.thumbnail}`}
      />
      <div>
        <h2>
          {" "}
          {user.name.first}
          {user.name.last}
        </h2>

        <Link to={`/user/${user.name.first}`}>
          <button>Click to see more information</button>
        </Link>
      </div>
    </div>
  );
}

export default Users;
