import React, { useContext } from "react"
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from "../hooks/useLocalStorage";

const FlashcardContext = React.createContext();

export function useFlashcards() {
    return useContext(FlashcardContext)
}

// function to add and delete flashcard
export const FlashcardsProvider = ({ children }) => {
    const [flashcards, setFlashcards] = useLocalStorage("flashcards", [])

    function addFlashcard({ subject, description}){
        setFlashcards(prevCards => {
            return [...prevCards, { id: uuidV4(), subject, description}]
        })
    }
   
    function deleteFlashcard({ id }){
        setFlashcards(prevCards => {
            return prevCards.filter(cards => cards.id !== id)
        })
    }

    return (
        <FlashcardContext.Provider value={{
            flashcards,
            addFlashcard,
            deleteFlashcard,
        }}>{children}</FlashcardContext.Provider>
    )
}