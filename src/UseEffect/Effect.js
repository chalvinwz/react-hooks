import { useEffect, useState } from 'react';

import axios from 'axios';

const Effect = () => {
	const [data, setData] = useState('');

	useEffect(() => {
		const fetchComments = async () => {
			const { data } = await axios.get(
				'https://jsonplaceholder.typicode.com/comments'
			);
			setData(data[0].email);
		};

		fetchComments();
	}, []);

	return (
		<>
			<div>hey {data}</div>
		</>
	);
};

export default Effect;
