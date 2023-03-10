import { useState } from "react";
import { TaskProps } from "../../types/task";
import { TaskContainer } from "./style";

type Props = {
  item: TaskProps,
  handleCheckTask: (id: number) => void
}

export function Task({ item, handleCheckTask }: Props) {
  return (
    <TaskContainer completed={item.completed} onClick={() => { handleCheckTask(item.id) }}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleCheckTask(item.id)}
      />
      <label>{item.name}</label>
    </TaskContainer>
  )
}