import React from 'react';
import {ScrollSelectBook} from './ScrollBook';
import {useContext} from 'react';
import {BibleContext} from '../../context/BibleContext';
import {ScrollChapter} from './ScrollChapter';

const oldTestamentData = {
  genesis: ['Génesis', 50],
  exodo: ['Éxodo', 40],
  levitico: ['Levítico', 27],
  numeros: ['Números', 36],
  deuteronomio: ['Deuteronomio', 34],
  josue: ['Josué', 24],
  jueces: ['Jueces', 21],
  rut: ['Rut', 4],
  '1samuel': ['1 Samuel', 31],
  '2samuel': ['2 Samuel', 24],
  '1reyes': ['1 Reyes', 22],
  '2reyes': ['2 Reyes', 25],
  '1cronicas': ['1 Crónicas', 29],
  '2cronicas': ['2 Crónicas', 36],
  esdras: ['Esdras', 10],
  neemias: ['Nehemías', 13],
  ester: ['Ester', 10],
  job: ['Job', 42],
  salmos: ['Salmos', 150],
  proverbios: ['Proverbios', 31],
  eclesiastes: ['Eclesiastés', 12],
  cantares: ['Cantares', 8],
  isaías: ['Isaías', 66],
  jeremías: ['Jeremías', 52],
  lamentaciones: ['Lamentaciones', 5],
  ezequiel: ['Ezequiel', 48],
  daniel: ['Daniel', 12],
  oseas: ['Oseas', 14],
  joel: ['Joel', 3],
  amos: ['Amós', 9],
  abdias: ['Abdías', 1],
  jonas: ['Jonás', 4],
  miqueas: ['Miqueas', 7],
  nahum: ['Nahúm', 3],
  habacuc: ['Habacuc', 3],
  sofonias: ['Sofonías', 3],
  hageo: ['Hageo', 2],
  zacarias: ['Zacarías', 14],
  malaquias: ['Malaquías', 4],
};

export const OldTestament = () => {
  const {
    bibleState: {chapterOnPress},
  } = useContext(BibleContext);

  if (chapterOnPress) {
    return <ScrollChapter testament={oldTestamentData} />;
  }

  return (
    <>
      <ScrollSelectBook testament={oldTestamentData} />
    </>
  );
};
