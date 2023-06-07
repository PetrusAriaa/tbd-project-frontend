import { useParams } from 'react-router-dom';

interface Book {
	book_name: string;
	pages: number;
	price: number;
	publisher: string;
}

export default function Book() {
	const param = useParams();
	const bookName = param.bookName;
	return (
		<div>
			<h1>{bookName}</h1>
		</div>
	);
}
