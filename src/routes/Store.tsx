import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreNavbar } from '../components/Navbar';
import { BACKEND_PORT } from '../config';

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
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fill-rule='evenodd'
												d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
												clip-rule='evenodd'></path>
										</svg>
									</a>
									<a
										href={`/${storeId}/books/${book.book_name}`}
										className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
										Delete
										<svg
											aria-hidden='true'
											className='w-4 h-4 ml-2 -mr-1'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fill-rule='evenodd'
												d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
												clip-rule='evenodd'></path>
										</svg>
									</a>
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
