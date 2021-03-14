// import logo from './logo.svg';
// import './App.css';
import Hello from "./components/hello";
import Welcome from "./components/Welcome";

function App() {
  return (
      <div className="App">
          hello from app
          <Welcome name="Dalia"> Mohamed Shawky Matter </Welcome>
          <Hello name="Dalia"> Mohamed Shawky Matter </Hello>
      </div>
  );
}

export default App;
