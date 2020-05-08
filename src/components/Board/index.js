import React, { useState } from "react";
import { Container } from "./style";
import List from "../List";
import { loadList } from "../../services/api";
import BoardContext from "./context";

const data = loadList();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(from, to) {
    console.log(from, to);
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((lists) => (
          <List key={lists.title} data={lists} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}
