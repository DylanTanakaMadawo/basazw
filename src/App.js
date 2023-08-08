import "./App.css";
import { Homepage } from "./components/Homepage";
import { JobForm } from "./components/JobForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/addjob" element={<JobForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
