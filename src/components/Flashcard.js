import { Card } from 'react-bootstrap';
import { useFlashcards } from '../contexts/flashcardContext';
import { useState } from 'react';

// display flashcard
export default function Flashcard({ flashcard }){
    const {deleteFlashcard } = useFlashcards()
    //toggle between showing/hiding of the description
    const [showDescription, setShowDescription] = useState(false)

    return (
    <Card>
        <Card.Body onClick={() => setShowDescription(!showDescription)} >
            <Card.Title className='d-flex justify-content-between pb-3 border-bottom'>
                {flashcard.subject} 
                <span className='text-danger delete-button' onClick={() => deleteFlashcard(flashcard)}>X</span>
            </Card.Title>
            <div className='description-body'>
                <div className={showDescription ? 'show' : 'hide'} >{flashcard.description}</div>
            </div>
        </Card.Body>
    </Card>
    )
}