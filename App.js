import logo from './logo.svg';
import './App.css';
import ContactComponent from './components/pure/contact';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
//import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* Componente propio Greeting.jsx
      <Greeting name="Martin"></Greeting>
      <GreetingF name="Martin"></GreetingF>*/}
      {/* Componente de listado de tareas 
        <TaskListComponent></TaskListComponent>*/}
        <ContactComponent></ContactComponent>
      </header>
    </div>
  );
}

export default App;
