import {BibleState} from '../context/BibleContext';

type BibleAction =
  | {type: 'onPressBook'; payload: boolean}
  | {type: 'onPressChapter'; payload: boolean}
  | {type: 'onPressVerse'; payload: boolean}
  | {type: 'onChangeBook'; payload: {bookText: string; book: string}}
  | {type: 'onChangeChapter'; payload: number}
  | {type: 'onChangeVerse'; payload: number}
  | {type: 'onActiveCard'; payload: boolean};

export const bibleReducer = (
  state: BibleState,
  action: BibleAction,
): BibleState => {
  switch (action.type) {
    case 'onPressBook':
      return {
        ...state,
        bookOnPress: action.payload,
        chapterOnPress: false,
        verseOnPress: false,
      };
    case 'onPressChapter':
      return {
        ...state,
        chapterOnPress: action.payload,
        bookOnPress: false,
        verseOnPress: false,
      };
    case 'onPressVerse':
      return {
        ...state,
        verseOnPress: action.payload,
        bookOnPress: false,
        chapterOnPress: false,
      };
    case 'onChangeBook':
      return {
        ...state,
        bookText: action.payload.bookText,
        book: action.payload.book,
        chapter: 1,
        verse: 1,
      };
    case 'onChangeChapter':
      return {
        ...state,
        chapter: action.payload,
      };
    case 'onChangeVerse':
      return {
        ...state,
        verse: action.payload,
      };
    case 'onActiveCard':
      return {
        ...state,
        activeCard: action.payload,
      };
    default:
      return state;
  }
};
