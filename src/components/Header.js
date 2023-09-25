import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<header>
			<h1>jot</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
			>
				dark / light
			</button>
		</header>
	);
};

export default Header;
