import { useEffect, useState } from 'react';
import { StoreCard } from '../components/StoreCard';
import { BACKEND_PORT } from '../config';
import { HomeNavbar } from '../components/Navbar';

interface Store {
	store_id: number;
	manager: number; //change later
	street: string;
	city: string;
	state: string;
	country: string;
}

const Home = () => {
	const [data, setData] = useState([]);
	const getData = async () => {
		const res = await fetch(`http://${BACKEND_PORT}/stores`);
		const jsonData = await res.json();
		setData(jsonData.items);
	};
	useEffect(() => {
		getData();
	}, []);

	const stores: Store[] = data;

	return (
		<>
			<HomeNavbar />
			<div className='flex justify-center items-center py-40'>
				<div className='flex flex-col bg-slate-200 px-20 py-5 rounded-lg shadow-sm space-y-4'>
					<h1 className='m-auto text-2xl'>Daftar Cabang</h1>
					<div className='h-96 overflow-auto'>
						{stores.map((store, index) => (
							<a
								href={`/${store.store_id}`}
								key={index}>
								<StoreCard data={store} />
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
