import React from "react";

import { FiPower } from "react-icons/fi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Time,
  QueueDate,
} from "./styles";

import api from "../../services/api";

import { useAuth } from "../../hooks/auth";

const Dashboard: React.FC = () => {
  const { company, signOut } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Profile>
            <img src={company.avatar} alt={company.name} />

            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{company.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <QueueDate>
        <button type="button">
          <MdChevronLeft color="fff" size={36} />
        </button>
        <strong> 29 de Outubro</strong>
        <button type="button">
          <MdChevronRight color="fff" size={36} />
        </button>
      </QueueDate>

      <ul>
        <Time>
          <strong>Pamylla</strong>
          <span>Telefone</span>
        </Time>
        <Time>
          <strong>Pamylla2</strong>
          <span>Telefone</span>
        </Time>
        <Time>
          <strong>Pamylla3</strong>
          <span>Telefone</span>
        </Time>
        <Time>
          <strong>Pamylla4</strong>
          <span>Telefone</span>
        </Time>
      </ul>
    </Container>
  );
};

export default Dashboard;
