import { Button, Container, Card } from 'react-bootstrap';
import { useState } from "react";
import { useFlashcards } from './contexts/flashcardContext';
import AddFlashcardModal from './components/AddFlashcardModal';
import Flashcard from './components/Flashcard';
import './App.css';

function App() {

const [showAddFlashcardModal, setShowAddFlashcardtModal] = useState(false)
const { flashcards } = useFlashcards()

  return (
    <>
      <Container>
        <h1 className='me-auto'>Simple Flashcard</h1>
        <Button className='mb-2' onClick={() => setShowAddFlashcardtModal(true)} >Add Flashcard</Button>

        <div className='flashcards'>
          {flashcards.map(flashcard => {
            return (<Flashcard flashcard={flashcard}></Flashcard>)
          })}
        </div>
      </Container>
      <AddFlashcardModal show={showAddFlashcardModal} handelClose={() => setShowAddFlashcardtModal(false)}/>
    </>
  );
}

export default App;
