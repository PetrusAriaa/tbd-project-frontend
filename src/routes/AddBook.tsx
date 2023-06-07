import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BACKEND_PORT } from '../config';
import axios from 'axios';

const AddBook = () => {
	const [judul, setJudul] = useState('');
	const [halaman, setHalaman] = useState('0');
	const [qty, setQty] = useState('1');
	const [harga, setHarga] = useState('0');
	const [tahunPublikasi, setTahunPublikasi] = useState('');
	const [lPenulis, setlPenulis] = useState<any>([]);
	const [lPublisher, setlPublisher] = useState<any>([]);
	const [penulis, setPenulis] = useState('');
	const [penerbit, setPenerbit] = useState('');

	const params = useParams();
	const storeId = params.storeId;

	const listPenulis = async () => {
		const _listPenulis = await fetch(`http://${BACKEND_PORT}/authors`);
		const jsonPenulis = await _listPenulis.json();
		setlPenulis(jsonPenulis.items);
		console.log(jsonPenulis.items);
		setPenulis(jsonPenulis.items[0].author_name);
	};
	const listPublisher = async () => {
		const _listPublisher = await fetch(`http://${BACKEND_PORT}/publishers`);
		const jsonPublisher = await _listPublisher.json();
		setlPublisher(jsonPublisher.items);
		console.log(jsonPublisher.items);
		setPenerbit(jsonPublisher.items[0].publisher_name);
	};

	useEffect(() => {
		listPenulis();
		listPublisher();
	}, []);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			const data = {
				store: storeId,
				book_name: judul,
				publication_year: tahunPublikasi,
				pages: halaman,
				pname: penerbit,
				quantity: qty,
				price: harga,
				penulis: penulis,
			};
			console.log(data);
			axios.post(`http://${BACKEND_PORT}/${storeId}/books`, data).then(
				(response) => {
					console.log(response);
				},
				(error) => {
					console.log(error.response.data);
				}
			);
			setJudul('');
			setPenulis(lPenulis[0].author_name);
			setPenerbit(lPublisher[0].publisher_name);
			setHalaman('0');
			setQty('1');
			setHarga('0');
			setTahunPublikasi('');
		} catch (err) {
			console.error('Error:', err);
		}
	};

	return (
		<div className='flex flex-row p-10 justify-center'>
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
					<label className='peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
						Judul Buku
					</label>
				</div>
				<div className='relative z-0 w-full mb-6 group'>
					<label className='block mb-2 text-sm font-medium text-gray-400 '>
						Nama Penulis
					</label>
					<select
						onChange={(e) => {
							setPenulis(e.target.value);
						}}
						value={penulis}
						id='countries'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '>
						{lPenulis.map((penulis: any, index: any) => (
							<option key={index}> {penulis.author_name} </option>
						))}
					</select>
				</div>
				<div className='relative z-0 w-full mb-6 group'>
					<label className='block mb-2 text-sm font-medium text-gray-400 '>
						Nama Penerbit
					</label>
					<select
						onChange={(e) => {
							setPenerbit(e.target.value);
						}}
						value={penerbit}
						id='countries'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '>
						{lPublisher.map((publisher: any, index: any) => (
							<option key={index}>
								{publisher.publisher_name}
							</option>
						))}
					</select>
				</div>

				<div className='grid md:grid-cols-2 md:gap-6'>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							className='block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
							onChange={(e) => {
								setTahunPublikasi(e.target.value);
							}}
							value={tahunPublikasi}
						/>
						<label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Tahun Publikasi
						</label>
					</div>
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
