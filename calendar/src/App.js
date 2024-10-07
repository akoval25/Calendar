import './App.css';
import MyCalendar from './Components/Calendar/Calendar.js';
import Event from './Components/Event/Event.js';
import Nav from './Components/Nav/Nav.js';
import Main from './Components/Main/Main.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
