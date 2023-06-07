import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreNavbar } from '../components/Navbar';
import { BACKEND_PORT } from '../config';
import axios from 'axios';

interface Book {
	book_name: string;
	book_number: number;
	pages: number;
	price: number;
	publication_year: number;
	publisher: string;
	quantity: number;
}

interface Store {
	store_id: number;
	manager: number; //change later
	street: string;
	city: string;
	state: string;
	country: string;
}

const Store = () => {
	const param = useParams();
	const storeId = param.storeId;
	const [book, setBook] = useState([]);
	const [store, setStore] = useState<any>([]);

	const getBook = async () => {
		const res = await fetch(`http://${BACKEND_PORT}/${storeId}/books`);
		const jsonData = await res.json();
		console.log(jsonData);
		setBook(jsonData.items);
	};

	const getStore = async () => {
		const res = await fetch(`http://${BACKEND_PORT}/stores/${storeId}`);
		const jsonData = await res.json();
		setStore(jsonData.items[0]);
	};

	const handleDelete = async (book_number: number) => {
		axios
			.delete(`http://${BACKEND_PORT}/${storeId}/books/${book_number}`)
			.then((response) => {
				console.log('Post deleted successfully', response);
			})
			.catch((error) => {
				console.error('Error deleting post:', error);
			});
	};

	useEffect(() => {
		getBook();
		getStore();
	});

	const books: Book[] = book;
	return (
		<div>
			<StoreNavbar
				store={{
					store_id: store.store_id,
				}}
			/>
			<div className='px-28 pt-28'>
				<h1 className='text-center text-2xl'>Daftar Buku:</h1>
				<div className='grid grid-cols-3 gap-4'>
					{books.map((book, index) => (
						<div
							key={index}
							className='px-5 py-1 space-y-2'>
							<div className='p-6 bg-white border border-gray-200 rounded-lg shadow'>
								<a href='#'>
									<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
										{book.book_name}
									</h5>
								</a>
								<p className='mb-3 font-normal text-gray-700'>
									{book.publisher}
								</p>
								<div className='space-x-2'>
									<a
										href={`/${storeId}/books/${book.book_name}`}
										className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-blue-300'>
										Edit
										<svg
											aria-hidden='true'
											className='w-4 h-4 ml-2 -mr-1'
											fill='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path d='m12,7V.46c.913.346,1.753.879,2.465,1.59l3.484,3.486c.712.711,1.245,1.551,1.591,2.464h-6.54c-.552,0-1-.449-1-1Zm1.27,12.48c-.813.813-1.27,1.915-1.27,3.065v1.455h1.455c1.15,0,2.252-.457,3.065-1.27l6.807-6.807c.897-.897.897-2.353,0-3.25-.897-.897-2.353-.897-3.25,0l-6.807,6.807Zm-3.27,3.065c0-1.692.659-3.283,1.855-4.479l6.807-6.807c.389-.389.842-.688,1.331-.901-.004-.12-.009-.239-.017-.359h-6.976c-1.654,0-3-1.346-3-3V.024c-.161-.011-.322-.024-.485-.024h-4.515C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h5v-1.455Z' />
										</svg>
									</a>
									<button
										onClick={(e) =>
											handleDelete(book.book_number)
										}
										className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300'>
										Delete
										<svg
											aria-hidden='true'
											className='w-4 h-4 ml-2 -mr-1'
											fill='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path d='M17,4V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2V4ZM11,17H9V11h2Zm4,0H13V11h2ZM15,4H9V2h6Z' />
										</svg>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Store;
