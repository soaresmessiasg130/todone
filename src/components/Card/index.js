import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Container, Label } from "./style";
import BoardContext from "../Board/context";

export default function Card({ data, index }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index, id: data.id, content: data.content },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedItem = item.index;
      const targetItem = index;
      if (draggedItem === targetItem) return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedItem < targetItem && draggedTop < targetCenter) return;
      if (draggedItem > targetItem && draggedTop > targetCenter) return;

      console.log(targetCenter, draggedTop);
      move(draggedItem, targetItem);
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map((label) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      <img src={data.user} alt="" />
    </Container>
  );
}
