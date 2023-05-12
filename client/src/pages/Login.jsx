import styled from "styled-components";
import { Layer } from "../components/Layer/Layer.jsx";
import { useContext, useState, useEffect } from "react";
import { Form } from "react-router-dom";
import FormTitle from "../components/Form/FormTitle";
import FormWrapper from "../components/Form/FormWrapper";
import FormButtonsContainer from "../components/Form/FormButtonsContainer";
import ButtonsSubmit from "../components/Form/ButtonsSubmit";
import FormButton from "../components/Form/FormButton";
import { DataContext } from "../Context/DataContext.js";
import {
  validateLoginPassword,
  validateLoginEmail,
} from "../ValidateForm/Validate";
import { getUser } from "../Api/Api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginContainer = styled(Layer)`
  padding: 5%;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

export default function Login() {
  const { ToastifyComponent, toastifySettings, set_User_State } =
    useContext(DataContext);

  const [email, setEmail] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [password, setPassword] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [users, setUsers] = useState([]);
  const [isLogin, setIslogin] = useState(false);

  const navigate = useNavigate();

  const formElements = [
    {
      formElement: "input",
      type: "email",
      state: email,
      labelText: "Ingresa tu Email",
      placeholder: "Ingresa tu Email",
      onChangeFunc(input) {
        setEmail({ value: input, valid: validateLoginEmail(input, users) });
      },
      onBlurFunc(input) {
        setEmail({ value: input, valid: validateLoginEmail(input, users) });
      },
      errorMessage: [
        "por favor, ingresa tu email",
        "Email inválido",
        "Este usuario no existe",
      ],
      options: null,
    },
    {
      formElement: "input",
      type: "password",
      state: password,
      labelText: "Ingresa tu password",
      placeholder: "Ingresa tu password",
      onChangeFunc(input) {
        setPassword({
          value: input,
          valid: validateLoginPassword(input, users),
        });
      },
      onBlurFunc(input) {
        setPassword({
          value: input,
          valid: validateLoginPassword(input, users),
        });
      },
      errorMessage: [
        "por favor, ingresa tu contraseña",
        "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico",
        "Esta contraseña no existe. Por favor, ingrese otra diferente",
      ],
      options: null,
    },
  ];
  const sendData = async ({ useremail, userpassword }) => {
    try {
      const user = users.filter(
        (data) =>
          data.useremail === useremail && data.userpassword === userpassword
      );
      if (user.length > 0) {
        const session = { isLogin: true, isRegister: true, useremail };
        localStorage.setItem("userSession", JSON.stringify(session));
        set_User_State(session);
        setIslogin(true);
      } else {
        toast.error(
          "El correo de usuario y la contraseña son incompatibles. Por favor inténtelo de nuevo"
        );
      }
    } catch {
      toast.error(
        "Ocurrió un error, inténtelo de nuevo más tarde",
        toastifySettings
      );
    }
  };

  const cleanForm = () => {
    setEmail({ value: "", valid: { index: null, value: null } });
    setPassword({ value: "", valid: { index: null, value: null } });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    sendData({
      useremail: email.value,
      userpassword: password.value,
    });
    cleanForm();
  };

  const getUsers = async () => {
    const res = await getUser("/user");
    if (res.status === 200) {
      setUsers(res.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (isLogin === true) {
      toast.success("¡Has iniciado sesión correctamente!", toastifySettings);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [isLogin]);
  
  return (
    <LoginContainer>
      <>
        <ToastifyComponent />
        <Form onSubmit={formSubmit}>
          <FormTitle>Iniciar Sesión</FormTitle>
          {formElements.map((element, i) => {
            const error = element.state.valid.value;
            return (
              <FormWrapper
                error={error}
                errorMessage={
                  error ? element.errorMessage[element.state.valid.index] : ""
                }
                element={element}
                key={i}
              />
            );
          })}
          <FormButtonsContainer>
            <ButtonsSubmit>
              <FormButton
                disabled={
                  email.valid.value === true || password.valid.value === true
                }
              >
                Ingresar
              </FormButton>
              <FormButton $clean onClick={cleanForm}>
                Limpiar
              </FormButton>
            </ButtonsSubmit>
          </FormButtonsContainer>
        </Form>
      </>
    </LoginContainer>
  );
}
