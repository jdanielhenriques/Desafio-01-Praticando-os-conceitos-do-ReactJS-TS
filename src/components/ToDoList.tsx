import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { Task } from "./Task";
import styles from "./ToDoList.module.css";
import { v4 as uuidv4 } from "uuid";
import Clipboard from "../assets/Clipboard.svg";

interface Task {
  id: string;
  isChecked: boolean;
  title: string;
}

export function ToDoList() {
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateTask() {
    if (newTaskDescription.length === 0) return;
    setTasks([
      ...tasks,
      { id: uuidv4(), isChecked: false, title: newTaskDescription },
    ]);
    setNewTaskDescription("");
  }

  function handleDeleteTask(id: string) {
    setTasks((previousTasks) => {
      return previousTasks.filter((task) => task.id !== id);
    });
  }
  function handleTaskEdit(e: ChangeEvent<HTMLInputElement>) {
    setNewTaskDescription(e.target.value);
  }

  function countTasksDone(previousValue: number, currentValue: Task) {
    if (currentValue.isChecked) return ++previousValue;
    return previousValue;
  }

  function handleCheckTask(id: string) {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isChecked: !task.isChecked,
          }
        : task
    );
    setTasks(newTasks);
  }
  return (
    <div className={styles.container}>
      <div className={styles.imputItem}>
        <input
          type='text'
          value={newTaskDescription}
          placeholder='Adicione uma nova tarefa'
          onChange={handleTaskEdit}
        />
        <button onClick={handleCreateTask}>
          Criar
          <PlusCircle size={16} />
        </button>
      </div>
      <div className={styles.taskCount}>
        <div className={styles.tasks}>
          Tarefas criadas
          <span>{tasks.length}</span>
        </div>
        <div className={styles.tasksDone}>
          Concluídas
          {tasks.length > 0 ? (
            <span>
              {tasks.reduce(countTasksDone, 0)} de {tasks.length}
            </span>
          ) : (
            <span>0</span>
          )}
        </div>
      </div>
      {tasks.length <= 0 && (
        <div className={styles.emptyList}>
          <img
            src={Clipboard}
            alt=''
          />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
      <div className={styles.taskList}>
        <ul>
          {tasks.map((task) => {
            return (
              <li key={uuidv4()}>
                <Task
                  task={task}
                  handleDeleteTask={handleDeleteTask}
                  handleCheckTask={handleCheckTask}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
