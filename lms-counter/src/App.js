import Layouts from "./Layout/Layouts";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layouts />
      </Router>
    </div>
  );
}

export default App;
