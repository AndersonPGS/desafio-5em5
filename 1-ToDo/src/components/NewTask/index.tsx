import { useState } from "react";
import { NewTaskContainer } from "./style";

type Props = {
  handleAddTask: (taskName: string) => void
}

export function NewTask({ handleAddTask }: Props) {
  const [inputText, setInputText] = useState("")

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === "Enter" && inputText !== "") {
      handleAddTask(inputText)
      setInputText("")
    }
  }

  return (
    <NewTaskContainer>
      <div className="plusIcon">➕</div>

      <input
        type="text"
        placeholder="Digite o nome de uma nova tarefa"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </NewTaskContainer>
  )
}