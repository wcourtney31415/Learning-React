import logo from "./logo.svg";
import "./App.css";
import ButtonBar from "./ButtonBar.js";
import Clicker from "./Clicker.js";

var x = 5;

function printme() {
  console.log("this: " + x);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clicker callMeBack={()=>printme}></Clicker>
        <p>Select one to change the color.</p>
        <ButtonBar />
      </header>
    </div>
  );
}

export default App;
