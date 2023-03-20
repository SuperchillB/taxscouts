import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { BookSearchDocsDTO } from '../../types/api/books';
import { getUniqueArrayByKey } from '../../utils/arrays';

interface BooksState {
  viewedBooks: BookSearchDocsDTO[];
}

const initialState: BooksState = {
  viewedBooks: [],
};

export const booksSlice = createSlice({
  name: 'bookSearch',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookSearchDocsDTO>) => {
      const newViewedBooks = [action.payload, ...state.viewedBooks];
      state.viewedBooks = getUniqueArrayByKey(newViewedBooks, 'key');
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
