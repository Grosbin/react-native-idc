import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollSelectBook} from './ScrollBook';

const newTestamentData = {
  mateo: ['Mateo', 28],
  marcos: ['Marcos', 16],
  lucas: ['Lucas', 24],
  juan: ['Juan', 21],
  hechos: ['Hechos', 28],
  romanos: ['Romanos', 16],
  '1corintios': ['1 Corintios', 16],
  '2corintios': ['2 Corintios', 13],
  galatas: ['Gálatas', 6],
  efesios: ['Efesios', 6],
  filipenses: ['Filipenses', 4],
  colosenses: ['Colosenses', 4],
  '1tesalonicenses': ['1 Tesalonicenses', 5],
  '2tesalonicenses': ['2 Tesalonicenses', 3],
  '1timoteo': ['1 Timoteo', 6],
  '2timoteo': ['2 Timoteo', 4],
  tito: ['Tito', 3],
  filemon: ['Filemón', 1],
  hebreos: ['Hebreos', 13],
  santiago: ['Santiago', 5],
  '1pedro': ['1 Pedro', 5],
  '2pedro': ['2 Pedro', 3],
  '1juan': ['1 Juan', 5],
  '2juan': ['2 Juan', 1],
  '3juan': ['3 Juan', 1],
  judas: ['Judas', 1],
  apocalipsis: ['Apocalipsis', 22],
};

export const NewTestament = () => {
  return (
    <ScrollSelectBook
      testament={newTestamentData}
      style={{alignItems: 'flex-end', marginRight: 15}}
    />
  );
};
