import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Create from './Components/Create';
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/Read" element={<Read />} />
        <Route path="/Update" element={<Update />} />
     {/* <h2 className='main-header'>  React Crud Operations</h2> */}
    {/* <div>
      <Create />
    </div> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
