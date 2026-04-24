import './App.css';
import ToDoList from './Components/ToDoList'

function App() {
  let todos = [
        {
            id: 1,
            name: "Выучить HTML",
            status: "В работе"
        },
        {
            id: 2,
            name: "Выучить CSS",
            status: "В работе"
        },
        {
            id: 3,
            name: "Выучить JavaScript",
            status: "Получено"
        },
        {
            id: 4,
            name: "Выучить React",
            status: "Получено"
        },
    ];
  return (
    <div className="App">
      <ToDoList list={todos}/>
    </div>
  );
}

export default App;
