const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<small
					onClick={() => handleDeleteNote(id)}
					className='delete'
				>Delete</small>
			</div>
		</div>
	);
};

export default Note;
