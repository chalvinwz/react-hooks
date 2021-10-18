import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const Memo = () => {
	const [data, setData] = useState([]);
	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get(
				'https://jsonplaceholder.typicode.com/comments'
			);
			setData(data);
		};

		getData();
	}, []);

	const findLongestName = (comments) => {
		if (!comments) return null;

		let longestName = '';
		for (let i = 0; i < comments.length; i++) {
			let currentName = comments[i].name;
			if (currentName.length > longestName.length) {
				longestName = currentName;
			}
		}

		console.log('This was computed');

		return longestName;
	};

	const getLongestName = useMemo(() => findLongestName(data), [data]);

	return (
		<div>
			<div>{getLongestName}</div>
			<button onClick={() => setToggle((prev) => !toggle)}>Toggle</button>
			{toggle && <p>Hey</p>}
		</div>
	);
};

export default Memo;
