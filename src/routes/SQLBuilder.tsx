import axios from 'axios';
import { useState } from 'react';
import { BACKEND_PORT } from '../config';
import { BookManagerNavbar } from '../components/Navbar';

export default function SQLBuilder() {
	const [textArea, setTextArea] = useState('');
	const [sqlData, setSqlData] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const data = {
			sql: textArea,
		};
		axios.post(`http://${BACKEND_PORT}/sql`, data).then(
			(response) => {
				console.log(response);
				setSqlData(JSON.stringify(response.data));
			},
			(err) => {
				console.error(err);
			}
		);
	};

	return (
		<div>
			<BookManagerNavbar />
			<div className='flex flex-col space-y-10'>
				<div className='flex flex-row justify-center pt-10'>
					<form onSubmit={handleSubmit}>
						<div className=''>
							<label className='block mb-2 text-sm font-medium text-gray-900 '>
								SQL Builder
							</label>
							<textarea
								id='message'
								className='block p-2.5 w-96 h-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500'
								placeholder='Start your query here ...'
								onChange={(e) => {
									setTextArea(e.target.value);
									console.log(textArea);
								}}
								value={textArea}></textarea>
						</div>
						<button
							type='submit'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
							Submit
						</button>
					</form>
				</div>
				<h1 className='w-[50rem] m-auto'>{sqlData}</h1>
			</div>
		</div>
	);
}
