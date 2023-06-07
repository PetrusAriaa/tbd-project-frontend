import { useEffect, useState } from 'react';
import { BACKEND_PORT } from '../config';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { EditBookNavbar } from '../components/Navbar';

export default function EditBook() {
	const [judul, setJudul] = useState('');
	const [halaman, setHalaman] = useState('0');
	const [harga, setHarga] = useState('0');
	const [tahunPublikasi, setTahunPublikasi] = useState('');
	const [lPenulis, setlPenulis] = useState<any>([]);
	const [lPublisher, setlPublisher] = useState<any>([]);
	const [penulis, setPenulis] = useState('');
	const [penerbit, setPenerbit] = useState('');

	const param = useParams();
	const bookNumber = param.bookNumber;

	const listPenulis = async () => {
		const _listPenulis = await fetch(`http://${BACKEND_PORT}/authors`);
		const jsonPenulis = await _listPenulis.json();
		setlPenulis(jsonPenulis.items);
	};

	const getBookData = async () => {
		try {
			axios.get(`http://${BACKEND_PORT}/books/${bookNumber}`).then(
				(response) => {
					const data = response.data.items[0];
					setPenulis(data.author);
					setJudul(data.book_name);
					setPenerbit(data.publisher);
					setTahunPublikasi(data.publication_year);
					setHalaman(data.pages);
					const _harga = data.price;
					const trim = _harga.replace('$', '');
					const parsedPrice = parseFloat(trim);
					setHarga(parsedPrice.toString());
				},
				(error) => {
					console.error(error);
				}
			);
		} catch (err) {
			console.error(err);
		}
	};

	const listPublisher = async () => {
		const _listPublisher = await fetch(`http://${BACKEND_PORT}/publishers`);
		const jsonPublisher = await _listPublisher.json();
		setlPublisher(jsonPublisher.items);
	};

	useEffect(() => {
		listPenulis();
		listPublisher();
		getBookData();
	}, []);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			const data = {
				book_name: judul,
				publication_year: tahunPublikasi,
				pages: halaman,
				pname: penerbit,
				price: harga,
				author: penulis,
			};
			console.log(data);
			axios.put(`http://${BACKEND_PORT}/books/${bookNumber}`, data).then(
				(response) => {
					console.log(response);
					alert('Data Updated');
				},
				(error) => {
					console.log(error.response.data);
				}
			);
		} catch (err) {
			console.error('Error:', err);
		}
	};

	return (
		<div>
			<EditBookNavbar />
			<div className='flex flex-row p-10 pt-32 justify-center'>
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
								<option key={index}>
									{' '}
									{penulis.author_name}{' '}
								</option>
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
					<div className='space-x-2'>
						<button
							type='submit'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
