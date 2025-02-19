"use client"; // Required for Next.js
import React from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./components/droppabe";
import WordsList from "./components/wordsList";



export default function Home() {

  return (
    <DndContext>
      <Droppable>
       <WordsList></WordsList>
      </Droppable>
    </DndContext>
  );
}
