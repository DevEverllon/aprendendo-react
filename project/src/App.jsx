import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Jornada da Programação Web",
      description: "Com HTML, CSS e JS",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Jornada do Inglês",
      description: "Fundamentos e Carreira",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Jornada da IA",
      description: "Desvendando a Engenharia de Prompt",
      isCompleted: false,
    },
  ]);

  // ALTERAR O STATE
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  // EXCLUIR TAREFA
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  // ADICIONAR TAREFA
  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask])
  };

  // npm install uuid  10.0.0


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>

        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;