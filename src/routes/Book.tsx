import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BACKEND_PORT } from '../config';
import { useEffect, useState } from 'react';
import { AddBookNavbar } from '../components/Navbar';

export default function Book() {
	const param = useParams();
	const bookNumber = param.bookNumber;
	const storeId = param.storeId;
	const [bookData, setBookData] = useState<any>([]);
	const [qty, setQty] = useState('');

	const getBookData = async () => {
		axios.get(`http://${BACKEND_PORT}/${storeId}/books/${bookNumber}`).then(
			(response) => {
				const data = response.data;
				console.log(data);
				setBookData(data.items[0]);
				setQty(data.items[0].quantity);
			},
			(error) => {
				console.error(error);
			}
		);
	};

	const handleUpdate = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const data = {
				quantity: qty,
			};
			axios
				.put(
					`http://${BACKEND_PORT}/${storeId}/books/${bookNumber}`,
					data
				)
				.then(
					(response) => {
						console.log(response);
						alert('Quantity updated');
					},
					(error) => {
						console.log(error.response.data);
					}
				);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getBookData();
	}, []);

	return (
		<div>
			<AddBookNavbar
				store={{
					store_id: storeId,
				}}
			/>
			<div className='px-96 py-20'>
				<h1 className='text-4xl font-medium'>{bookData.book_name}</h1>
				<h1 className=''>{bookData.author}</h1>
				<h1 className=''>{bookData.price}</h1>
				<h1 className=''>{bookData.pages}</h1>
				<h1 className=''>
					{bookData.publisher}{' '}
					<span>({bookData.publication_year})</span>
				</h1>
				<div className='flex flex-col justify-end items-start space-x-2'>
					<h1>Quantity:</h1>
					<div>
						<form
							onSubmit={handleUpdate}
							className='w-full flex flex-row'>
							<input
								type='text'
								className='block w-full text-slate-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
								placeholder=' '
								required
								onChange={(e) => {
									setQty(e.target.value);
								}}
								value={qty}
							/>
							<button
								type='submit'
								className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
								Update
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
