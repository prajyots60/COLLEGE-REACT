import { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask(''); // Clear input
    }
  };

  // Handle completing a task via checkbox only
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handle deleting a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">To-Do List</h1>

        {/* Task Input */}
        <div className="flex mb-6">
          <input
            type="text"
            className="flex-grow border border-gray-300 p-3 rounded-l-md text-black"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-4 border rounded-lg shadow-md ${
                task.completed ? 'bg-green-100' : 'bg-gray-100'
              }`}
            >
              {/* Checkbox to toggle completed state */}
              <input
                type="checkbox"
                className="mr-3 h-5 w-5 "
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
              />
              {/* Task Text */}
              <span
                className={`flex-grow text-lg ${
                  task.completed ? 'line-through text-gray-500' : 'text-black'
                }`}
              >
                {task.text}
              </span>
              {/* Delete Button */}
              <button
                className="text-red-500 hover:text-red-700 ml-4"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {/* No tasks message */}
        {tasks.length === 0 && (
          <p className="text-gray-500 mt-6 text-center">No tasks yet. Add one!</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
