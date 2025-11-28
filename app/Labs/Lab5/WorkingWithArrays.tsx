'use client';

import { useState, useEffect } from 'react';

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function WorkingWithArrays() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo>({ id: 0, title: '', completed: false });

  const fetchTodos = async () => {
    const response = await fetch(`${HTTP_SERVER}/lab5/todos`);
    const data = await response.json();
    setTodos(data);
  };

  const createTodo = async () => {
    const response = await fetch(`${HTTP_SERVER}/lab5/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (id: number) => {
    await fetch(`${HTTP_SERVER}/lab5/todos/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((t) => t.id !== id));
  };

  const updateTodo = async () => {
    await fetch(`${HTTP_SERVER}/lab5/todos/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      
      <h4>Fetching Arrays</h4>
      <a
        id="wd-get-todos"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/todos`}
      >
        Get Todos
      </a>
      <a
        id="wd-get-todos-completed-true"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/todos?completed=true`}
      >
        Get Completed
      </a>
      <a
        id="wd-get-todos-completed-false"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/todos?completed=false`}
      >
        Get Not Completed
      </a>
      
      <hr />
      
      <h4>Creating, Updating, and Deleting</h4>
      <input
        className="form-control mb-2"
        placeholder="Todo ID"
        type="number"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: Number(e.target.value) })}
      />
      <input
        className="form-control mb-2"
        placeholder="Todo Title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        />
        <label className="form-check-label">Completed</label>
      </div>
      
      <button
        id="wd-create-todo"
        className="btn btn-success me-2"
        onClick={createTodo}
      >
        Create Todo
      </button>
      <button
        id="wd-update-todo"
        className="btn btn-warning me-2"
        onClick={updateTodo}
      >
        Update Todo
      </button>
      
      <hr />
      
      <h4>Displaying Todos</h4>
      <ul className="list-group">
        {todos.map((t) => (
          <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>ID:</strong> {t.id} - {t.title} {t.completed && '✓'}
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTodo(t.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
