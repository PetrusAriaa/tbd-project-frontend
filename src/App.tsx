import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Store from './routes/Store';
import Book from './routes/Book';
import AddBook from './routes/AddBook';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/:storeId'
					Component={Store}
				/>
				<Route
					path='/:storeId/books/:bookName'
					Component={Book}
				/>
				<Route
					path='/:storeId/add-book'
					Component={AddBook}
				/>
			</Routes>
		</Router>
	);
}
