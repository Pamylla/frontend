import React, { useCallback, useRef } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { FormHandles } from "@unform/core";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Content, Background } from "./styles";
import { useAuth } from "../../hooks/AuthContext";

import getValidationErrors from "../../utils/getValidationError";

// const logoImg = require("../../assets/logo.svg");

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email("Digite um e-mail válido")
            .required("E-mail obrigatório"),
          password: Yup.string().required("Senha obrigatória"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
        debugger;
      } catch (err) {
        debugger;
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        {/* <img src={logoImg} alt="logo" /> */}
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        {/* <a >
          <FiLogIn />
          Criar conta
        </a> */}
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
