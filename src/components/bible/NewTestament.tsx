import React from 'react';
import {ScrollSelectBook} from './ScrollBook';
import {useContext} from 'react';
import {BibleContext} from '../../context/BibleContext';
import {ScrollChapter} from './ScrollChapter';
import {ScrollVerse} from './ScrollVerse';

const newTestamentData = {
  mateo: ['Mateo', 28],
  marcos: ['Marcos', 16],
  lucas: ['Lucas', 24],
  juan: ['Juan', 21],
  hechos: ['Hechos', 28],
  romanos: ['Romanos', 16],
  corintios1: ['1 Corintios', 16],
  corintios2: ['2 Corintios', 13],
  galatas: ['Gálatas', 6],
  efesios: ['Efesios', 6],
  filipenses: ['Filipenses', 4],
  colosenses: ['Colosenses', 4],
  tesalonicenses1: ['1 Tesalonicenses', 5],
  tesalonicenses2: ['2 Tesalonicenses', 3],
  timoteo1: ['1 Timoteo', 6],
  timoteo2: ['2 Timoteo', 4],
  tito: ['Tito', 3],
  filemon: ['Filemón', 1],
  hebreos: ['Hebreos', 13],
  santiago: ['Santiago', 5],
  pedro1: ['1 Pedro', 5],
  pedro2: ['2 Pedro', 3],
  juan1: ['1 Juan', 5],
  juan2: ['2 Juan', 1],
  juan3: ['3 Juan', 1],
  judas: ['Judas', 1],
  apocalipsis: ['Apocalipsis', 22],
};
interface Props {
  widthOffset: any;
  heightOffset: any;
}
export const NewTestament = ({widthOffset, heightOffset}: Props) => {
  const {
    bibleState: {chapterOnPress, verseOnPress},
  } = useContext(BibleContext);

  if (chapterOnPress) {
    return <ScrollChapter />;
  }

  if (verseOnPress) {
    return (
      <ScrollVerse widthOffset={widthOffset} heightOffset={heightOffset} />
    );
  }

  return <ScrollSelectBook testament={newTestamentData} />;
};
