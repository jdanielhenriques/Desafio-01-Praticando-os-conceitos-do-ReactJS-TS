import styles from "./Checkbox.module.css";


interface CheckboxProps {
  id: string;
  isChecked: boolean;
  title: string;
  handleCheckTask: (id: string) => void;
}

export function Checkbox(task: CheckboxProps) {
  return (
    
      <label
        className={`${styles.taskLabel}${
          task.isChecked ? " " + styles.checked : ""
        }`}
      >
        <input
          type='checkbox'
          defaultChecked={task.isChecked}
          onChange={() => {
            task.handleCheckTask(task.id);
          }}
          id={task.id}
        />
        {task.title}
      </label>
    
  );
}
