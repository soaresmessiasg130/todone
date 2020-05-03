import React from "react";
import { Container } from "./style";
import { MdAdd } from "react-icons/md";
import Card from "../Card";

export default function List({ data }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={22} color="#FFF" />
          </button>
        )}
      </header>
      <ul>
        {data.cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </ul>
    </Container>
  );
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22;
// 23;
// 24;
// 25;
