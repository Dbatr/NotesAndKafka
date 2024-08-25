import React, { useState } from 'react';

function NoteForm({ addNote }) {
const [note, setNote] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
if (note) {
await addNote(note);
setNote('');
}
};

return (
<div>
<input
type="text"
value={note}
onChange={(e) => setNote(e.target.value)}
placeholder="Enter note"
style={{ marginBottom: '5px' }}
/>
<button onClick={handleSubmit}>Add Note</button>
</div>
);
}

export default NoteForm;