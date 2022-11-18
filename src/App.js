import SingleCalendar from "./components/SingleCalendar/SingleCalendar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Project 22</h1>
      <div className='w-[40%] mx-auto'>
        <SingleCalendar  range={false}/>
      </div>
    </div>
  );
}

export default App;
