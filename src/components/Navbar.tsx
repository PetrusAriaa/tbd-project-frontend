import { FC } from 'react';

interface Street {
	store: {
		store_id: number | string | undefined;
	};
}

export const StoreNavbar: FC<Street> = ({ store }) => {
	return (
		<div className='sticky top-0 bg-white/75 backdrop-blur-sm flex flex-row justify-around shadow-md py-4 items-center'>
			<a
				href='/'
				className='inline-flex items-center px-3 py-1 text-2xl font-medium text-center text-slate-800 rounded-lg hover:bg-slate-300 focus:ring-2 focus:outline-none focus:ring-slate-400'>
				Back
			</a>
			<div className='space-x-4'>
				<a
					href={`/${store.store_id}/add-book`}
					className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-2 focus:outline-none focus:ring-green-300'>
					Tambah buku
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
					href={`/${store.store_id}/admin`}
					className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-600 focus:ring-2 focus:outline-none focus:ring-sky-300'>
					Manage Staff
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
	);
};

export const AddBookNavbar: FC<Street> = ({ store }) => {
	return (
		<div className='flex flex-row shadow-md py-4 px-96 items-center'>
			<a
				href={`/${store.store_id}`}
				className='inline-flex items-center px-3 py-1 text-2xl font-medium text-center text-slate-800 rounded-lg hover:bg-slate-300 focus:ring-2 focus:outline-none focus:ring-slate-400'>
				Back
			</a>
		</div>
	);
};

export const BookManagerNavbar = () => {
	return (
		<div className='sticky top-0 flex flex-row bg-white/75 backdrop-blur-sm shadow-md py-4 px-96 items-center'>
			<a
				href='/'
				className='inline-flex items-center px-3 py-1 text-2xl font-medium text-center text-slate-800 rounded-lg hover:bg-slate-300 focus:ring-2 focus:outline-none focus:ring-slate-400'>
				Back
			</a>
		</div>
	);
};

export const HomeNavbar = () => {
	return (
		<div className='flex flex-row shadow-md py-4 px-96 justify-between items-center'>
			<h1 className='text-2xl font-medium'>Good Reading Bookstore</h1>
			<div className='space-x-2'>
				<a
					href={`/manage-book`}
					className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-600 focus:ring-2 focus:outline-none focus:ring-sky-300'>
					Manage Book
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
					href={`/sqlbuilder`}
					className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-600 focus:ring-2 focus:outline-none focus:ring-indigo-300'>
					SQL Builder
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
	);
};

export const EditBookNavbar = () => {
	return (
		<div className='sticky top-0 flex flex-row bg-white/75 backdrop-blur-sm shadow-md py-4 px-96 items-center'>
			<a
				href='/manage-book'
				className='inline-flex items-center px-3 py-1 text-2xl font-medium text-center text-slate-800 rounded-lg hover:bg-slate-300 focus:ring-2 focus:outline-none focus:ring-slate-400'>
				Back
			</a>
		</div>
	);
};
