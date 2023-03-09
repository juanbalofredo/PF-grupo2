import { useDispatch, useSelector } from "react-redux";
import "./dashUsers.css";
import Navbar from "../Navbar/NavBar";
import { useEffect } from "react";
import { getUsers, updateUser } from "../../redux/apiPetitions/userPetitions";

const DashUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const state = useSelector((state) => state.bolsilloFeliz);
  const estate = useSelector((state) => state.bolsilloPersist);
  const allUsers = state.allUsers;

  async function cambiarTipo(id, type_account) {   
    updateUser(estate.type_account,id, type_account)
    }





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
                <td onChange={e=>cambiarTipo(element.id,e.target.value)} className="ed-tipo"><select name="" id="">{element.type_account}
                 <option value="1">Usuario</option>
                 <option value="2">Mercader</option>
                 <option value="4">Merc.Premium</option>
                 <option value="3">Admin</option>
                  </select></td>

                <td className="ag-but">
                <label class="switchBtn">
    <input type="checkbox"/>
    <div class="slide round"></div>
</label>
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
