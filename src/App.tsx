import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import NewNote from "./Components/NewNote";

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" exact element={<h1>H3</h1>} />
        <Route path="/new" exact element={<NewNote/>} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
