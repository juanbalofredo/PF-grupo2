import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { StartGoogleAuth } from "../../redux/apiPetitions/userPetitions";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitGoogle = () => {
    dispatch(StartGoogleAuth)
    .then(res=>console.log(res))
  };

  return (
    <button className="register-google" onClick={handleSubmitGoogle}>
      Iniciar Sesion con Google
    </button>
  );
};

export default Register;
