import {createContext, useReducer} from 'react';
import {bibleReducer} from '../reducer/bibleReducer';

export interface BibleState {
  book: string;
  chapter: number;
  verse: number;
  bookText: string;
  bookOnPress: boolean;
  chapterOnPress: boolean;
  verseOnPress: boolean;
  activeCard: boolean;
}

export interface BibleContextProps {
  bibleState: BibleState;
  onPressBookHandler: (value: boolean) => void;
  onPressChapterHandler: (value: boolean) => void;
  onPressVerseHandler: (value: boolean) => void;
  onChangeBook: (bookText: string, book: string) => void;
  onChangeChapter: (chapter: number) => void;
  onChangeVerse: (verse: number) => void;
  onActiveCard: (value: boolean) => void;
}

export const initialStateBible: BibleState = {
  book: 'genesis',
  chapter: 1,
  verse: 1,
  bookText: 'Génesis',
  bookOnPress: false,
  chapterOnPress: false,
  verseOnPress: false,
  activeCard: false,
};

export const BibleContext = createContext({} as BibleContextProps);

export const BibleProvider = ({children}: any) => {
  const [bibleState, dispatch] = useReducer(bibleReducer, initialStateBible);

  const onPressBookHandler = (value: boolean) => {
    dispatch({type: 'onPressBook', payload: value});
  };

  const onPressChapterHandler = (value: boolean) => {
    dispatch({type: 'onPressChapter', payload: value});
  };

  const onPressVerseHandler = (value: boolean) => {
    dispatch({type: 'onPressVerse', payload: value});
  };

  const onChangeBook = (bookText: string, book: string) => {
    dispatch({type: 'onChangeBook', payload: {bookText, book}});
  };

  const onChangeChapter = (chapter: number) => {
    dispatch({type: 'onChangeChapter', payload: chapter});
  };

  const onChangeVerse = (verse: number) => {
    dispatch({type: 'onChangeVerse', payload: verse});
  };

  const onActiveCard = (value: boolean) => {
    dispatch({type: 'onActiveCard', payload: value});
  };

  return (
    <BibleContext.Provider
      value={{
        bibleState,
        onPressBookHandler,
        onPressChapterHandler,
        onPressVerseHandler,
        onChangeBook,
        onChangeChapter,
        onChangeVerse,
        onActiveCard,
      }}>
      {children}
    </BibleContext.Provider>
  );
};
