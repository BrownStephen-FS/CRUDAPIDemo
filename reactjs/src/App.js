import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Student from "./pages/Student";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/students/:id" exact element={<Student />}></Route>
        <Route path="/dashboard" exact element={<Dashboard />}></Route>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
