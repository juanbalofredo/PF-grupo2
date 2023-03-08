import { useSelector } from "react-redux";
import invitado from "../../assets/invitado.png";
import { Link } from "react-router-dom";
import "./user.css"

export const User = () => {
  

  const state = useSelector((state) => state.bolsilloPersist);
  const user = state.user;
  const image = user ? state.avatar : null;
  const rol = user ? state.type_account : null;
  const name = user ? state.name :null
  return (
    <div className="user-container">
      <div>
        {user  ? <img className="profileImg"src={image} alt="" height="40px" width="40px" /> : <img className="profileImg"src={invitado} alt="" height="40px" width="40px" />}
      </div>
      <div className="name-container">
      {user ? <h4 className="name">{name}</h4> : <h4 className="name"></h4> }
      </div>
      <div className="dash-container">
      {rol == 2 ? <h4 className="name"><Link to="/dashuser">Mi mercado</Link> </h4> : <h4 className="name"></h4> }
      </div>
      <div className="dash-container">
      {rol == 3 ? <h4 className="name"><Link to="/dashuser">Lista de usuarios</Link> </h4> : <h4 className="name"></h4> }
      </div>
      
    </div>
  );
};
export default User;