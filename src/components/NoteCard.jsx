import React from 'react'

const NoteCard = (props) => {
    return (
        <article className='bg-slate-400 p-4 w-80 max-h-64 text-slate-950 rounded-md'>
            <header className="flex justify-between">
                <span className="bg-blue-500/40 px-3 rounded-xl border-2 border-blue-500 font-medium text-sm text-blue-800 cursor-default">Personnal</span>

                <div className="flex gap-3">
                    <input className="cursor-pointer" type="checkbox" name="selectNote" id="selectNote" />

                    <button><i className="fi fi-sr-pencil"></i></button>
                    <button><i className="fi fi-ss-trash"></i></button>
                </div>
            </header>

            <main className="my-3 cursor-default">
                <h2 className="text-lg font-semibold">{props.title}</h2>

                <p>{props.text}</p>
            </main>

            <footer className="flex justify-end cursor-default">
                <p className="text-sm text-slate-900/50 font-medium">23-04-24</p>
            </footer>
        </article>
    )
}

export default NoteCard