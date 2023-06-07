import { FC } from 'react';

interface Street {
	store: {
		store_id: number;
	};
}

export const StoreNavbar: FC<Street> = ({ store }) => {
	return (
		<div className='flex flex-row justify-around'>
			<a href='/'>
				<h1 className='text-slate-800 text-3xl font-medium'>
					Good Reading Bookstore
				</h1>
			</a>
			<div className='space-x-4'>
				<a
					href={`/${store.store_id}/add-book`}
					className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300'>
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
					className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300'>
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
