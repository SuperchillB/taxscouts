import { BOOK_COVER_API_BASE_URL } from '../../../src/constants';
import { trimBookKey, getBookCover } from '../../../src/utils/books';

describe('Books - unit tests', () => {
  it('trimBookKey', () => {
    expect(trimBookKey('/works/OL11697103W')).to.equal('OL11697103W');
    expect(trimBookKey('test')).to.equal('test');
  });

  it('getBookCover', () => {
    const placeholder = 'https://placehold.co/180x248';
    const size = 'L';
    const bookWithCoverId = {
      key: '/works/OL11697103W',
      title: 'Potted golf',
      first_publish_year: 1910,
      number_of_pages_median: 148,
      cover_i: 123,
      isbn: ['isbn1', 'isbn2'],
    };
    const bookWithOclc = {
      key: '/works/OL11697103W',
      title: 'Potted golf',
      first_publish_year: 1910,
      number_of_pages_median: 148,
      oclc: ['123', '456'],
    };
    const bookWithNoCover = {
      key: '/works/OL11697103W',
      title: 'Potted golf',
      first_publish_year: 1910,
      number_of_pages_median: 148,
    };

    expect(
      getBookCover({
        book: bookWithCoverId,
        defaultImg: placeholder,
        size,
      }),
    ).to.equal(
      `${BOOK_COVER_API_BASE_URL}/id/${bookWithCoverId.cover_i}-${size}.jpg`,
    );

    expect(
      getBookCover({
        book: bookWithOclc,
        defaultImg: placeholder,
      }),
    ).to.equal(`${BOOK_COVER_API_BASE_URL}/oclc/${bookWithOclc.oclc[0]}-M.jpg`);

    expect(
      getBookCover({
        book: bookWithNoCover,
        defaultImg: placeholder,
      }),
    ).to.equal(placeholder);
  });
});
