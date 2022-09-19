import "./global.css";
import { Header } from "./components/Header";
import { ToDoList } from "./components/ToDoList";

export function App() {
  return (
    <>
      <Header />
      <ToDoList />
    </>
  );
}
