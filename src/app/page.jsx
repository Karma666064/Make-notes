"use client"
import NoteCard from "@/components/NoteCard";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const useStateTitle = useState('');
    const useStateText = useState('');
    const useStateNotes = useState([]);

    const handleShowModal = e => {
        if (e?.target.id == 'btnAdd') setShowModal(true);
        else setShowModal(false);
    }

    return (
        <>
            <header className="bg-slate-300 dark:bg-slate-500 py-4 px-6 flex justify-center gap-4">
                <input className="bg-slate-200 w-50 rounded-sm py-1 px-4 text-gray-800" type="search" name="searchNote" id="searchNote" placeholder="Search notes ..." />

                <button id='btnAdd' className="bg-blue-700 px-6 rounded-sm" onClick={handleShowModal}>Add</button>
            </header>

            <main className="px-28 py-10">
                <h1 className="mb-5 text-3xl font-bold cursor-default">Make Notes</h1>

                <nav>
                    <ul className="flex gap-2 *:px-4 *:cursor-pointer">
                        <li>All</li>
                        <li>Personnal</li>
                        <li>Home</li>
                        <li>Buisiness</li>
                    </ul>
                </nav>

                <section className="mt-6 grid grid-cols-[repeat(3,_320px)] gap-9 justify-center">
                    { useStateNotes[0].length > 0 ?
                        useStateNotes[0].map(note => <NoteCard key={note.id} title={note.title} text={note.text} />) :
                        <p>Have no notes here!</p>
                    }
                </section>
            </main>

            <Modal isVisible={showModal} onClose={handleShowModal} title={useStateTitle} text={useStateText} notes={useStateNotes}/>
        </>
    );
}