import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
	const [selection, setSelection] = useState(null);

	const handleSelect = (option) => {
		setSelection(option);
	};

	const options = [
		{ label: 'red', value: 'red' },
		{ label: 'green', value: 'green' },
		{ label: 'blue', value: 'blue' },
	];
	return (
		<div className='flex'>
			<Dropdown options={options} onChange={handleSelect} value={selection} />
			<Dropdown options={options} onChange={handleSelect} value={selection} />
		</div>
	);
}

export default DropdownPage;
