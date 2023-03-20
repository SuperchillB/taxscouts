import { BOOK_COVER_API_BASE_URL } from '../../constants';
import { BookSearchDocsDTO } from '../../types/api/books';

/**
 * Trims a book key returned from Open Library and returns only the actual key part
 * @param {string} key - string - The key to be trimmed
 * @returns {string} The trimmed key
 */
export const trimBookKey = (key: BookSearchDocsDTO['key']) => {
  const keyParts = key.split('/');
  const trimmedKey = keyParts[keyParts.length - 1];
  return trimmedKey;
};

/**
 * Returns a book cover for a given book
 * @param {BookSearchDocsDTO} book - The book (object) to get the cover from
 * @param {string} placeholder     - A default placeholder img url to return if no cover can be returned
 * @returns {string}               - The url or src of an image
 */
export const getBookCover = ({
  book,
  defaultImg,
  size = 'M',
}: {
  book: BookSearchDocsDTO;
  defaultImg: string;
  size?: 'S' | 'M' | 'L';
}) => {
  let bookCoverPath = '';
  if (book.cover_i) {
    bookCoverPath = `id/${book.cover_i}-${size}.jpg`;
  } else if (book.id_goodreads && book.id_goodreads.length) {
    bookCoverPath = `goodreads/${book.id_goodreads[0]}-${size}.jpg`;
  } else if (book.id_librarything && book.id_librarything.length) {
    bookCoverPath = `librarything/${book.id_librarything[0]}-${size}.jpg`;
  } else if (book.oclc && book.oclc.length) {
    bookCoverPath = `oclc/${book.oclc[0]}-${size}.jpg`;
  } else if (book.isbn && book.isbn.length) {
    bookCoverPath = `isbn/${book.isbn[0]}-${size}.jpg`;
  } else {
    // return 'https://placehold.co/180x248';
    return defaultImg;
  }

  return `${BOOK_COVER_API_BASE_URL}/${bookCoverPath}`;
};
