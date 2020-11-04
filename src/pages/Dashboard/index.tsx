import React, { useState, useMemo, useEffect } from "react";
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  parseISO,
} from "date-fns";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Container, Time } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft color="fff" size={36} />
        </button>
        <strong> 29 de Outubro</strong>
        <button type="button">
          <MdChevronRight color="fff" size={36} />
        </button>
      </header>
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
