
import genesis from '../data/ntv/genesis.json';
import exodo from '../data/ntv/exodo.json';
import levitico from '../data/ntv/levitico.json';



export const getBook = (book: string) => {
	let bookData: Object;

	switch (book) {
		case 'genesis':
			bookData = genesis;
			return bookData;
		case 'exodo':
			bookData = exodo;
			return bookData;
		case 'levitico':
			bookData = levitico;
			return bookData;
		default:
			bookData = genesis;
			return bookData;
	}		
}