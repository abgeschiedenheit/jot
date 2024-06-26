import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState("");
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText("");
		}
	};

	return (
		<div className="note new">
			<textarea
				rows="9"
				cols="10"
				placeholder="jot a memo down..."
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className="note-footer">
				<small className="characters">
					{characterLimit - noteText.length} characters left
				</small>
				<small className="add" onClick={handleSaveClick}>
					add note
				</small>
			</div>
		</div>
	);
};

export default AddNote;
