import "./App.css";
import { TodoList } from "./components/TodoList";

export default function App() {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Todo App</h1>
            <div className="App center">
                <TodoList></TodoList>
            </div>
        </>
    );
}
