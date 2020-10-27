import React from "react";

import { FiAlertCircle, FiXCircle } from "react-icons/fi";
import { Container, Toast } from "./styles";

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
          <p> não foi possivel fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="success">
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
          <p> não foi possivel fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="error">
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
          <p> não foi possivel fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
