import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Draggable } from "./draggable";
import initialWordsList from "./words";

export default function WordsList() {
  const [words, setWords] = useState(initialWordsList);

  // Handles drag end and updates positions
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.id === active.id
          ? {
              ...word,
              position: {
                x: word.position.x + delta.x,
                y: word.position.y + delta.y,
              },
            }
          : word
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-5 relative">
        {words.map((word) => (
          <Draggable
            key={word.id}
            id={word.id}
            content={word.content}
            styles={{
              position: "absolute",
              left: `${word.position.x}px`,
              top: `${word.position.y}px`,
            }}
          />
        ))}
      </div>
    </DndContext>
  );
}
