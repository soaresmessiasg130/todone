import React from "react";
import { Container, Label } from "./style";

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#f00" />
      </header>
      <p>Estudar as novidades do Spring Boot</p>
      <img
        src="https://api.adorable.io/avatars/285/abott@adorable.png"
        alt=""
      />
    </Container>
  );
}
