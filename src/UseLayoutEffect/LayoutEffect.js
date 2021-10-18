import { useLayoutEffect, useEffect, useRef } from 'react';

const LayoutEffect = () => {
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.value = 'Hello';
	}, []);

	useLayoutEffect(() => {
		console.log(inputRef.current.value);
	}, []);

	return (
		<div>
			<input type='text' ref={inputRef} value='John' />
		</div>
	);
};

export default LayoutEffect;
