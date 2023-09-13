import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
    <div className="todo-app">
      <TodoList/>
    </div>
    <div className="about">
    <a href="https://github.com/AnweshaPatra">
    <img src="https://github.com/fluidicon.png" alt="GitHub Logo" />
  </a>

    </div>
  </div>
  );
}

export default App;
