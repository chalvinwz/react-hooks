import { useEffect } from 'react';

const Child = ({ returnComment }) => {
	useEffect(() => {
		console.log('function was called');
	}, [returnComment]);

	return (
		<div>
			<div>{returnComment(' tot')}</div>
		</div>
	);
};

export default Child;
