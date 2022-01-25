import { FC, useEffect, useState } from "react";
import { Todo } from "./Todo";

// The key with which the todos are stored
const todoStorageName = "react-todo-app-todos";

// save the todos to the local storage
function saveTodos(todos: string[]): void {
    window.localStorage.setItem(todoStorageName, JSON.stringify(todos));
}

// read the todos from the local storage
function readTodos(): string[] | null {
    const tmp = window.localStorage.getItem(todoStorageName);
    if (tmp !== null) {
        return JSON.parse(tmp);
    }

    return null;
}

/*
 * A list where Todos can be added and removed
 */
export const TodoList: FC = () => {
    const [todos, setTodos] = useState([] as string[]);
    const [input, setInput] = useState("");

    // The input element used for creating a new Todo
    let inputElement: any;

    // Read the Todos from the local storage initially
    useEffect(() => {
        const loadedTodos = readTodos();
        if (loadedTodos !== null) {
            setTodos(loadedTodos);
        }
    }, []);

    // Save the Todos to the local storage every time they change
    useEffect(() => saveTodos(todos), [todos]);

    // Add a Todo safely to the Todo-list
    const addTodo = () => {
        if (input.length > 0) {
            setTodos(() => todos.concat([input]));
            inputElement.value = "";
            setInput("");
        } else {
            alert("Please enter a valid todo name");
        }
    };

    // Remove a Todo safely from the Todo-list
    const removeTodo = (todoIndex: number) =>
        setTodos(() => todos.filter((_, index) => index !== todoIndex));

    const handleInput = (event: any) => {
        setInput(event.target.value);
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Todo Name"
                    onChange={handleInput}
                    ref={(el) => (inputElement = el)}
                />
                <button style={{ marginLeft: "1em" }} onClick={addTodo}>
                    Add Todo
                </button>
            </div>

            {todos.map((val, i) => (
                <Todo key={i} name={val} remove={() => removeTodo(i)}></Todo>
            ))}
        </>
    );
};
