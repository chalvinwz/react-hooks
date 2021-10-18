import { useRef, useState } from 'react';

const Ref = () => {
	const [text, setText] = useState('');
	const inputRef = useRef();

	const handleOnSubmit = (e) => {
		// console.log(inputRef.current.value);
		// inputRef.current.value = '';
		// inputRef.current.focus();

		e.preventDefault();
		setText(inputRef.current.value);
		inputRef.current.value = '';
	};

	console.log(text);

	return (
		<form onSubmit={handleOnSubmit}>
			<h1>Pedro</h1>
			<input type='text' placeholder='example' ref={inputRef} />
			<button type='submit'>Change name</button>
		</form>
	);
};

export default Ref;
