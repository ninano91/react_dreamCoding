import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: '123', text: '장보기', status: 'active' },
        { id: '124', text: '공부하기', status: 'active' },
    ]);

    const handleAdd = (todo) => setTodos([...todos, todo]);

    const handleUpdate = (updated) =>
        setTodos(todos.map((todo) => (todo.id === updated ? updated : todo)));

    const handleDelete = (deleted) =>
        setTodos(todos.filter((todo) => todo.id !== deleted.id));

    return (
        <div>
            <ul className="todo-list">
                {todos.map((item) => (
                    // <li key={item.id}>{item.text}</li>
                    // 위 li 처럼 여기서 직접적으로 다 처리하기보단,
                    // 컴포넌트를 따로 만들어 넣는게 낫다!

                    <Todo
                        key={item.id}
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd}></AddTodo>
        </div>
    );
}
