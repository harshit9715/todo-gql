export interface Todo {
    text: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type EditTodo = (selectedTodo: Todo) => void;

type DeleteTodo = (selectedTodo: Todo) => void;

type AddTodo = (todo: Todo) => void;