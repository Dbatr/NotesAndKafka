import React, { useEffect, useState } from 'react';
import NoteForm from './NoteForm';

function NoteList() {
const [notes, setNotes] = useState([]);
const [message, setMessage] = useState('');

const getNotes = async () => {
try {
const response = await fetch('http://localhost:8000/notes');
if (response.ok) {
const notes = await response.json();
setNotes(notes);
} else {
setMessage('Failed to fetch notes');
}
} catch (error) {
setMessage('Failed to fetch notes');
}
};

const addNote = async (note) => {
try {
const response = await fetch('http://localhost:8000/note', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(note)
});
if (response.ok) {
setMessage('Note added');
getNotes();
} else {
setMessage('Failed to add note');
}
} catch (error) {
setMessage('Failed to add note');
}
};

useEffect(() => {
getNotes();
}, []);

return (
<div>
<h1 className="title">Notes Application</h1>
<NoteForm addNote={addNote} />
<div id="message">{message}</div>
<h2>Notes:</h2>
<ul id="notesList" className="notes">
{notes.map((note, index) => (
<li key={index}>{note}</li>
))}
</ul>
</div>
);
}

export default NoteList;