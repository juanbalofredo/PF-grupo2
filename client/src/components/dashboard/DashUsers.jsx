import { useDispatch, useSelector } from "react-redux";
import "./dashUsers.css";
import Navbar from "../Navbar/NavBar";
import { useEffect } from "react";
import { getUsers, updateUser,updateUserActivity } from "../../redux/apiPetitions/userPetitions";

const DashUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const state = useSelector((state) => state.bolsilloFeliz);
  const estate = useSelector((state) => state.bolsilloPersist);
  const allUsers = state.allUsers;

  async function cambiarTipo(id, type_account) {
    console.log(estate.type_account, id, type_account);
    updateUser(estate.type_account, id, type_account);
  }

  async function kambiar(id,e) {
    console.log(id,e)
    updateUserActivity(estate.type_account, id, e);
    getUsers(dispatch);
  }

  return (
    <>
      <Navbar />
      <div className="cont-de-cont">
        <div className="container-ed-users">
          {allUsers.length ? (
            allUsers.map((element) => {
              return (
                <table key={element.id}>
                  <td className="ed-img">
                    {" "}
                    <img
                      className="ed-img-av"
                      src={element.avatar}
                      alt="img"
                    />{" "}
                  </td>
                  <td className="ed-name">{element.name}</td>
                  <td className="ed-last-name">{element.last_name}</td>
                  <td className="ed-email">{element.email}</td>

                  <td
                    onChange={(e) => cambiarTipo(element.id, e.target.value)}
                    className="ed-tipo"
                  >
                    <select name="" id="select-ed-us">
                      <option value="">
                        {element.type_account === "1"
                          ? "Usuario"
                          : element.type_account === "2"
                          ? "Mercader"
                          : element.type_account === "3"
                          ? "Admin"
                          : "Merc.Premium"}
                      </option>
                      {element.type_account === "1" ? (
                        ""
                      ) : (
                        <option value="1">Usuario</option>
                      )}
                      {element.type_account === "2" ? (
                        ""
                      ) : (
                        <option value="2">Mercader</option>
                      )}
                      {element.type_account === "3" ? (
                        ""
                      ) : (
                        <option value="3">Admin</option>
                      )}
                      {element.type_account === "4" ? (
                        ""
                      ) : (
                        <option value="4">Merc.Premium</option>
                      )}
                    </select>
                  </td>

                  <td className="ag-but">
                    <label className="switchBtn">
                      {element.activity ?  <input onChange={e=>kambiar(element.id,!element.activity)} type="checkbox" />:<input onChange={e=>kambiar(element.id,!element.activity)} checked type="checkbox" />}
                      <div className="slide round"></div>
                    </label>
                  </td>
                </table>
              );
            })
          ) : (
            <div className="container_vacio_2"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashUsers;
