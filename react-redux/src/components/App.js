import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
