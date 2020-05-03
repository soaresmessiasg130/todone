import React from "react";
import { Container } from "./style";
import List from "../List";
import { loadList } from "../../services/api";

export default function Board() {
  const list = loadList();

  return (
    <Container>
      {list.map((list) => (
        <List key={list.title} data={list} />
      ))}
    </Container>
  );
}
