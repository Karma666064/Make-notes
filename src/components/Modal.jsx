"use client"
import React from 'react';

const Modal = (props) => {
    const [type, setType] = props.type;
    const [taskTitle, setTaskTitle] = props.title;
    const [taskText, setTaskText] = props.text;
    const [notes, setNotes] = props.notes;

    const handleConfirm = () => {
        setNotes(notes => [...notes, {id: crypto.randomUUID(), type: type, title: taskTitle, text: taskText}]);

        props.onClose();

        setType('')
        setTaskTitle('');
        setTaskText('');
    }

    if (!props.isVisible) return null;
    else return (
        <div className='bg-black/40 fixed inset-0 w-full h-full flex justify-center items-center backdrop-blur-sm'>
            <div className='bg-slate-600 flex flex-col w-[45vw] h-[45vh] py-6 rounded'>
                <p className="text-2xl font-medium text-center">Add Note</p>

                <div className='mx-32 my-3 flex flex-col items-center gap-5 *:w-full *:py-1 *:px-3 *:text-gray-800 *:bg-slate-200 *:rounded-sm'>
                    <select name="selectType" id="selectType" defaultValue='none' onChange={event => setType(event.target.value)}>
                        <option value="none" disabled>-- Select a Type --</option>
                        <option value="Personnal">Personnal</option>
                        <option value="Home">Home</option>
                        <option value="Buisiness">Buisiness</option>
                    </select>

                    <input type="text" name="inputTitle" id="inputTitle" placeholder='Choose a Title ...'  value={taskTitle} onChange={event => setTaskTitle(event.target.value)}/>

                    <textarea name="areaText" id="areaText" cols={30} rows={5} placeholder='Type your text ...' value={taskText} onChange={event => setTaskText(event.target.value)}></textarea>
                </div>

                <div className='flex gap-6 justify-center *:py-1 *:px-4 *:rounded'>
                    <button id='btnClose' className='bg-red-700' onClick={props.onClose}>Close</button>
                    <button id='btnConfirm' className='bg-green-700' onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;