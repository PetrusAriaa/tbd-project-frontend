import { useState } from 'react';

const AddBook = () => {
	const [judul, setJudul] = useState('');
	const [penulis, setPenulis] = useState('');
	const [penerbit, setPenerbit] = useState('');
	const [halaman, setHalaman] = useState('0');
	const [qty, setQty] = useState('1');
	const [harga, setHarga] = useState('0');

	const handleSubmit = (event: any) => {
		event.preventDefault();
		const data = {
			judul: judul,
			penulis: penulis,
			penerbit: penerbit,
			halaman: halaman,
			qty: qty,
			harga: harga,
		};
		console.log(data);
		setJudul('');
		setPenulis('');
		setPenerbit('');
		setHalaman('');
		setQty('');
		setHarga('');
	};

	return (
		<div className='flex flex-row p-10 border justify-center'>
			<form onSubmit={handleSubmit}>
				<div className='relative z-0 w-full mb-6 group'>
					<input
						type='text'
						className='block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						required
						onChange={(e) => {
							setJudul(e.target.value);
						}}
						value={judul}
					/>
					<label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
						Judul Buku
					</label>
				</div>
				<div className='relative z-0 w-full mb-6 group'>
					<input
						type='text'
						className='block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder='dropdown'
						required
						onChange={(e) => {
							setPenulis(e.target.value);
						}}
						value={penulis}
					/>
					<label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
						Nama Penulis
					</label>
				</div>
				<div className='relative z-0 w-full mb-6 group'>
					<input
						type='text'
						className='block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder='dropdown'
						required
						onChange={(e) => {
							setPenerbit(e.target.value);
						}}
						value={penerbit}
					/>
					<label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
						Nama Penerbit
					</label>
				</div>

				<div className='grid md:grid-cols-2 md:gap-6'>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							className='block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
							onChange={(e) => {
								setHalaman(e.target.value);
							}}
							value={halaman}
						/>
						<label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Jumlah Halaman
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							className='block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder='default 1'
							required
							onChange={(e) => {
								setQty(e.target.value);
							}}
							value={qty}
						/>
						<label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Jumlah Buku
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							className='block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=''
							required
							onChange={(e) => {
								setHarga(e.target.value);
							}}
							value={harga}
						/>
						<label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Harga
						</label>
					</div>
				</div>
				<button
					type='submit'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddBook;
