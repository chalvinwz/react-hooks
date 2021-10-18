import { useState, useCallback } from 'react';

import Child from './Child';

const Callback = () => {
	const [data] = useState("Yo, what's up");
	const [toggle, setToggle] = useState(false);

	const returnComment = useCallback(
		(name) => {
			return data + name;
		},
		[data]
	);

	return (
		<div>
			<Child returnComment={returnComment} />

			<button
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{''}
				Toggle
			</button>

			{toggle && <p>Toggle</p>}
		</div>
	);
};

export default Callback;
