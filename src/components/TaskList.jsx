//autocompletado
//clg console
//Cnrl + espacio
//usestate opcion snipped
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList(/* {tasks, deleteTask} */) {
  const { tasks/* , deleteTask */ } =useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">Aún no hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/*  deleteTask={deleteTask} *//>
      ))}
    </div>
  );
}

export default TaskList;
