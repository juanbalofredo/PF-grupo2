import { useDispatch } from "react-redux";
import { StartGoogleAuth } from "../../redux/apiPetitions";

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmitGoogle = () => {
    dispatch(StartGoogleAuth);
  };

  return (
    <button className="register-google" onClick={handleSubmitGoogle}>
      Ingresar con Google
    </button>
  );
};

export default Register;
