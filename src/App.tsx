import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Store from './routes/Store';
import Book from './routes/Book';
import AddBook from './routes/AddBook';
import BookManager from './routes/BookManager';
import EditBook from './routes/EditBook';
import SQLBuilder from './routes/SQLBuilder';

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
					path='/:storeId/books/:bookNumber'
					Component={Book}
				/>
				<Route
					path='/:storeId/add-book'
					Component={AddBook}
				/>
				<Route
					path='/manage-book'
					Component={BookManager}
				/>
				<Route
					path='/manage-book/:bookNumber'
					Component={EditBook}
				/>
				<Route
					path='/sqlbuilder'
					Component={SQLBuilder}
				/>
			</Routes>
		</Router>
	);
}
