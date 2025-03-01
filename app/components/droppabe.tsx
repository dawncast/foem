import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  children: ReactNode;
}

export function Droppable({ children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable"
  });

  return (
    <div ref={setNodeRef} className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">
          {isOver ? "Drop here..." : "Writing poem here..."}
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          {children}
        </div>
      </div>
    </div>
  );
}
