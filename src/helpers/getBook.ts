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
import eclesiastes from '../data/ntv/eclesiastes.json';
import cantares from '../data/ntv/cantares.json';
import isaias from '../data/ntv/isaias.json';
import jeremias from '../data/ntv/jeremias.json';
import lamentaciones from '../data/ntv/lamentaciones.json';
import ezequiel from '../data/ntv/ezequiel.json';
import daniel from '../data/ntv/daniel.json';
import oseas from '../data/ntv/oseas.json';
import joel from '../data/ntv/joel.json';
import amos from '../data/ntv/amos.json';
import abdias from '../data/ntv/abdias.json';
import jonas from '../data/ntv/jonas.json';
import miqueas from '../data/ntv/miqueas.json';
import nahum from '../data/ntv/nahum.json';
import habacuc from '../data/ntv/habacuc.json';
import sofonias from '../data/ntv/sofonias.json';
import hageo from '../data/ntv/hageo.json';
import zacarias from '../data/ntv/zacarias.json';
import malaquias from '../data/ntv/malaquias.json';
// Nuevo Testamento
import mateo from '../data/ntv/mateo.json';
import marcos from '../data/ntv/marcos.json';
import lucas from '../data/ntv/lucas.json';
import juan from '../data/ntv/juan.json';
import hechos from '../data/ntv/hechos.json';
import romanos from '../data/ntv/romanos.json';
import corintios1 from '../data/ntv/corintios1.json';
import corintios2 from '../data/ntv/corintios2.json';
import galatas from '../data/ntv/galatas.json';
import efesios from '../data/ntv/efesios.json';
import filipenses from '../data/ntv/filipenses.json';
import colosenses from '../data/ntv/colosenses.json';
import tesalonicenses1 from '../data/ntv/tesalonicenses1.json';
import tesalonicenses2 from '../data/ntv/tesalonicenses2.json';
import timoteo1 from '../data/ntv/timoteo1.json';
import timoteo2 from '../data/ntv/timoteo2.json';
import tito from '../data/ntv/tito.json';
import filemon from '../data/ntv/filemon.json';
import hebreos from '../data/ntv/hebreos.json';
import santiago from '../data/ntv/santiago.json';
import pedro1 from '../data/ntv/pedro1.json';
import pedro2 from '../data/ntv/pedro2.json';
import juan1 from '../data/ntv/juan1.json';
import juan2 from '../data/ntv/juan2.json';
import juan3 from '../data/ntv/juan3.json';
import judas from '../data/ntv/judas.json';
import apocalipsis from '../data/ntv/apocalipsis.json';



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
    case 'eclesiastes':
      bookData = eclesiastes;
      return bookData;
    case 'cantares':
      bookData = cantares;
      return bookData;
    case 'isaias':
      bookData = isaias;
      return bookData;
    case 'jeremias':
      bookData = jeremias;
      return bookData;
    case 'lamentaciones':
      bookData = lamentaciones;
      return bookData;
    case 'ezequiel':
      bookData = ezequiel;
      return bookData;
    case 'daniel':
      bookData = daniel;
      return bookData;
    case 'oseas':
      bookData = oseas;
      return bookData;
    case 'joel':
      bookData = joel;
      return bookData;
    case 'amos':
      bookData = amos;
      return bookData;
    case 'abdias':
      bookData = abdias;
      return bookData;
    case 'jonas':
      bookData = jonas;
      return bookData;
    case 'miqueas':
      bookData = miqueas;
      return bookData;
    case 'nahum':
      bookData = nahum;
      return bookData;
    case 'habacuc':
      bookData = habacuc;
      return bookData;
    case 'sofonias':
      bookData = sofonias;
      return bookData;
    case 'hageo':
      bookData = hageo;
      return bookData;
    case 'zacarias':
      bookData = zacarias;
      return bookData;
    case 'malaquias':
      bookData = malaquias;
      return bookData;
    case 'mateo':
      bookData = mateo;
      return bookData;
    case 'marcos':
      bookData = marcos;
      return bookData;
    case 'lucas':
      bookData = lucas;
      return bookData;
    case 'juan':
      bookData = juan;
      return bookData;
    case 'hechos':
      bookData = hechos;
      return bookData;
    case 'romanos':
      bookData = romanos;
      return bookData;
    case 'corintios1':
      bookData = corintios1;
      return bookData;
    case 'corintios2':
      bookData = corintios2;
      return bookData;
    case 'galatas':
      bookData = galatas;
      return bookData;
    case 'efesios':
      bookData = efesios;
      return bookData;
    case 'filipenses':
      bookData = filipenses;
      return bookData;
    case 'colosenses':
      bookData = colosenses;
      return bookData;
    case 'tesalonicenses1':
      bookData = tesalonicenses1;
      return bookData;
    case 'tesalonicenses2':
      bookData = tesalonicenses2;
      return bookData;
    case 'timoteo1':
      bookData = timoteo1;
      return bookData;
    case 'timoteo2':
      bookData = timoteo2;
      return bookData;
    case 'tito':
      bookData = tito;
      return bookData;
    case 'filemon':
      bookData = filemon;
      return bookData;
    case 'hebreos':
      bookData = hebreos;
      return bookData;
    case 'santiago':
      bookData = santiago;
      return bookData;
    case 'pedro1':
      bookData = pedro1;
      return bookData;
    case 'pedro2':
      bookData = pedro2;
      return bookData;
    case 'juan1':
      bookData = juan1;
      return bookData;
    case 'juan2':
      bookData = juan2;
      return bookData;
    case 'juan3':
      bookData = juan3;
      return bookData;
    case 'judas':
      bookData = judas;
      return bookData;
    case 'apocalipsis':
      bookData = apocalipsis;
      return bookData;
    default:
      bookData = genesis;
      return bookData;
  }
};
