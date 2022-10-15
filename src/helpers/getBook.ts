
import genesis from '../data/ntv/genesis.json';
import exodo from '../data/ntv/exodo.json';
import levitico from '../data/ntv/levitico.json';
import numeros from '../data/ntv/numeros.json';
import deuteronomio from '../data/ntv/deuteronomio.json';
import josue from '../data/ntv/josue.json';
import jueces from '../data/ntv/jueces.json';
import rut from '../data/ntv/rut.json';
import samuel1 from '../data/ntv/samuel1.json';
import samuel2 from '../data/ntv/samuel2.json';
import reyes1 from '../data/ntv/reyes1.json';
import reyes2 from '../data/ntv/reyes2.json';
import cronicas1 from '../data/ntv/cronicas1.json';
import cronicas2 from '../data/ntv/cronicas2.json';
import esdras from '../data/ntv/esdras.json';
import nehemias from '../data/ntv/nehemias.json';
import ester from '../data/ntv/ester.json';
import job from '../data/ntv/job.json';
import salmos from '../data/ntv/salmos.json';
import proverbios from '../data/ntv/proverbios.json';



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
		case 'numeros':
			bookData = numeros;
			return bookData;
		case 'deuteronomio':
			bookData = deuteronomio;
			return bookData;
		case 'josue':
			bookData = josue;
			return bookData;
		case 'jueces':
			bookData = jueces;
			return bookData;
		case 'rut':
			bookData = rut;
			return bookData;
		case 'samuel1':
			bookData = samuel1;
			return bookData;
		case 'samuel2':
			bookData = samuel2;
			return bookData;
		case 'reyes1':
			bookData = reyes1;
			return bookData;
		case 'reyes2':
			bookData = reyes2;
			return bookData;
		case 'cronicas1':
			bookData = cronicas1;
			return bookData;
		case 'cronicas2':
			bookData = cronicas2;
			return bookData;
		case 'esdras':
			bookData = esdras;
			return bookData;
		case 'nehemias':
			bookData = nehemias;
			return bookData;
		case 'ester':
			bookData = ester;
			return bookData;
		case 'job':
			bookData = job;
			return bookData;
		case 'salmos':
			bookData = salmos;
			return bookData;
		case 'proverbios':
			bookData = proverbios;
			return bookData;
		default:
			bookData = genesis;
			return bookData;
	}		
}