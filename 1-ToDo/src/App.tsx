import { useState } from "react";
import { Container, Header, Wrapper } from "./App.style";
import { NewTask } from "./components/NewTask";
import { Task } from "./components/Task";
import { TaskProps } from "./types/task";
export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function onAddTask(taskName: string) {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  function onCheckTask(id: number) {
    const tasksWithChanged = tasks.map((task) => {
      if (task.id == id) {
        return {
          id: task.id,
          name: task.name,
          completed: !task.completed
        }
      } else {
        return task
      }
    })

    setTasks(tasksWithChanged)
  }

  return (
    <Container>
      <Wrapper>
        <Header>Lista de Tarefas</Header>
        <NewTask handleAddTask={onAddTask} />

        {tasks.slice(0).reverse().map((task, index) => (
          <Task key={`task-${task.id}`} item={task} handleCheckTask={onCheckTask} />
        ))}
      </Wrapper>
    </Container>
  )
}

