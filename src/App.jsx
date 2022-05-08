import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/sidebar/Sidebar";
import RightSide from "./components/rightSide/RightSide";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
