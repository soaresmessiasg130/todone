import React from "react";
import { Container } from "./style";
import { MdAdd } from "react-icons/md";
import Card from "../Card";

export default function List() {
  return (
    <Container>
      <header>
        <h2>Tarefa</h2>
        <button type="button">
          <MdAdd size={22} color="#FFF" />
        </button>
      </header>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}
