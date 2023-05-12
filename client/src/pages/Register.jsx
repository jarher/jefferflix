import styled from "styled-components";
import { Layer } from "../components/Layer/Layer";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
import Form from "../components/Form/Form";
import FormWrapper from "../components/Form/FormWrapper";
import FormButtonsContainer from "../components/Form/FormButtonsContainer";
import ButtonsSubmit from "../components/Form/ButtonsSubmit";
import FormButton from "../components/Form/FormButton";
import {
  validateConfirmEmail,
  validatePassword,
  validateUseremail,
  validateUsername,
} from "../ValidateForm/Validate.js";
import { createUser, getUser } from "../Api/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormTitle from "../components/Form/FormTitle";
import { useNavigate } from "react-router-dom";

const RegisterContainer = styled(Layer)`
  padding: 5%;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

export default function Register() {
  const { ToastifyComponent, toastifySettings } = useContext(DataContext);

  const [name, setName] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [email, setEmail] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [confirmEmail, setConfirmEmail] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [password, setPassword] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const formElements = [
    {
      formElement: "input",
      type: "text",
      state: name,
      labelText: "Ingresa tu nombre",
      placeholder: "Ingresa tu nombre",
      onChangeFunc(input) {
        setName({ value: input, valid: validateUsername(input, users) });
      },
      onBlurFunc(input) {
        setName({ value: input, valid: validateUsername(input, users) });
      },
      errorMessage: [
        "por favor, ingresa tu nombre",
        "Por favor, ingresa un nombre válido. No se aceptan caracteres especiales, excepto letras, guion(-) y barra baja(_)",
        "Nombre existente. Por favor, ingresa otro diferente",
      ],
      options: null,
    },
    {
      formElement: "input",
      type: "email",
      state: email,
      labelText: "Ingresa tu email",
      placeholder: "Ingresa tu email",
      onChangeFunc(input) {
        setEmail({ value: input, valid: validateUseremail(input, users) });
      },
      onBlurFunc(input) {
        setEmail({ value: input, valid: validateUseremail(input, users) });
      },
      errorMessage: [
        "por favor, ingresa tu email",
        "Email inválido",
        "Email existente. Por favor ingresa otro diferente",
      ],
      options: null,
    },
    {
      formElement: "input",
      type: "email",
      state: confirmEmail,
      labelText: "Confirma tu email",
      placeholder: "Confirma tu email",
      onChangeFunc(input) {
        setConfirmEmail({
          value: input,
          valid: validateConfirmEmail(input, email),
        });
      },
      onBlurFunc(input) {
        setConfirmEmail({
          value: input,
          valid: validateConfirmEmail(input, email),
        });
      },
      errorMessage: [
        "por favor, ingresa un email",
        "Email no compatible",
        "Por favor, ingresa otra contraseña diferente",
      ],
      options: null,
    },
    {
      formElement: "input",
      type: "password",
      state: password,
      labelText: "Ingresa una contraseña",
      placeholder: "Ingresa una contraseña",
      onChangeFunc(input) {
        setPassword({ value: input, valid: validatePassword(input, users) });
      },
      onBlurFunc(input) {
        setPassword({ value: input, valid: validatePassword(input, users) });
      },
      errorMessage: [
        "por favor, ingresa tu contraseña",
        "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico",
        "Contraseña existente. Por favor ingresa otra diferente",
      ],
      options: null,
    },
  ];

  const sendData = async (values) => {
    try {
      const res = await createUser("/user", values);
      if (res.status === 201) {
        navigate("/login");
      }
    } catch {
      toast.error(
        "Ocurrió un error, inténtelo de nuevo más tarde",
        toastifySettings
      );
    }
  };

  const cleanForm = () => {
    setName({ value: "", valid: { index: null, value: null } });
    setEmail({ value: "", valid: { index: null, value: null } });
    setConfirmEmail({ value: "", valid: { index: null, value: null } });
    setPassword({ value: "", valid: { index: null, value: null } });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    sendData({
      username: name.value,
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

  return (
    <RegisterContainer>
      <>
        <ToastifyComponent />
        <Form onSubmit={formSubmit}>
          <FormTitle>Regístrate</FormTitle>
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
                  name.valid.value === true ||
                  email.valid.value === true ||
                  confirmEmail.valid.value === true ||
                  password.valid.value === true
                }
              >
                Crear usuario
              </FormButton>
              <FormButton $clean onClick={cleanForm}>
                Limpiar
              </FormButton>
            </ButtonsSubmit>
          </FormButtonsContainer>
        </Form>
      </>
    </RegisterContainer>
  );
}
