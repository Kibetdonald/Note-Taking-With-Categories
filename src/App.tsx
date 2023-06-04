import { useState, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import NewNote from "./Components/NewNote";
import { useLocalStorage } from "./useLocalStorage";

export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData
export type RawNoteData = {
  id: string
  markdown: string
  tagIds: string[]

}
export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("Notes", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("Tags", [])

  const notesWithTags = useMemo(()=>{
    return notes.map(note=>{
      return {...note, tags:tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  }, [notes, tags])
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
