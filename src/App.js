import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "jot is a note-taking client in a pinboard-like layout",
			date: "07/07/77",
		},
		{
			id: nanoid(),
			text: "grocery items: toast, jam, peanut butter, milk",
			date: "07/07/77",
		},
		{
			id: nanoid(),
			text: "about m: she read simone weil and clarice lispector and listened to joanna newsom and bjork",
			date: "07/07/77",
		},
		{
			id: nanoid(),
			text: "tennyson: here are cool mosses deep / and thro' the moss the ivies creep / and in the stream the long-leaved flowers weep / and from the craggy ledge the poppy hangs in sleep",
			date: "07/07/77",
		}
	]);

	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div>
			<div className="container">
				<Header/>
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;