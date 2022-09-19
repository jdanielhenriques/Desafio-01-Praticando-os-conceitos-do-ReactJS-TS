import { TrashIcon } from "@heroicons/react/24/outline";
import { Checkbox } from "./Checkbox";
import styles from "./Task.module.css";

interface Task {
  id: string;
  isChecked: boolean;
  title: string;
}

interface TaskProps {
  task: Task;
  handleDeleteTask: (id: string) => void;
  handleCheckTask: (id: string) => void;
}

export function Task({ task, handleDeleteTask, handleCheckTask }: TaskProps) {
  return (
    <>
      <Checkbox
        id={task.id}
        isChecked={task.isChecked}
        title={task.title}
        handleCheckTask={handleCheckTask}
      />
      <TrashIcon
      className={styles.trash}
        onClick={() => handleDeleteTask(task.id)}
      />
    </>
  );
}
