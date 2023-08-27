import { Button, Form, FormControl, FormLabel, Modal } from "react-bootstrap";
import { useRef } from "react";
import { useFlashcards } from "../contexts/flashcardContext";

// model to add new flashcard
export default function AddFlashcardModal({ show, handelClose }){
    const subjectRef = useRef()
    const descriptionRef = useRef()
    const { addFlashcard } = useFlashcards()
    function handleSumbit(e){
        e.preventDefault()
        addFlashcard(
        {
            subject: subjectRef.current.value,
            description: descriptionRef.current.value
        })
        handelClose()
    }

    return (
        <Modal show={show} onHide={handelClose}>
            <Form onSubmit={handleSumbit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Flashcard</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="subject">
                        <FormLabel>Subject</FormLabel>
                        <FormControl ref={subjectRef} type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <FormLabel>Description</FormLabel>
                        <FormControl ref={descriptionRef} type="text" />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">Add</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}