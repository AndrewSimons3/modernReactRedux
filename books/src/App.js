import { useEffect } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import { useContext } from 'react';
import BooksContext from './context/books';

function App() {
	const { fetchBooks } = useContext(BooksContext);

	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<div className='app'>
			<h1>Reading List</h1>
			<BookList />
			<BookCreate />
		</div>
	);
}

export default App;
