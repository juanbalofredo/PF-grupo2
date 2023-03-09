import { useDispatch, useSelector } from "react-redux";
import "./dashUsers.css";
import Navbar from "../Navbar/NavBar";
import { useEffect } from "react";
import { getUsers } from "../../redux/apiPetitions/userPetitions";

const DashUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const state = useSelector((state) => state.bolsilloFeliz);
  const allUsers = state.allUsers;
  return (
    <>
      <Navbar />
      <div className="container-ed-users">
      <table>
        <tr className="ed-ekas">
          <td className="ed-img-2"><h3>Panel de usuarios</h3></td>

        </tr>
        {allUsers.length ? (
          allUsers.map((element) => {
            return (
              <tr>
                <td className="ed-img">
                  {" "}
                  <img className="ed-img-av" src={element.avatar} alt="img" />{" "}
                </td>
                <td className="ed-name">{element.name}</td>
                <td className="ed-last-name">{element.last_name}</td>
                <td className="ed-email">{element.email}</td>
                <td className="ed-tipo">{element.type_account}</td>
                <td className="ag-but">
                  Deshabilitar <input type="checkbox" />
                </td>
              </tr>
            );
          })
        ) : (
          <div className="container_vacio_2"></div>
        )}
      </table>
      </div>
    </>
  );
};

export default DashUsers;
