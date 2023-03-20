import { useAppSelector } from '../../hooks/redux-hooks';
import ViewedBookItem from './viewed-book-item';
import {
  // StyledBlob,
  StyledIllustration,
  StyledNoBooks,
  StyledViewedBooksList,
} from './viewed-books.styles';
import noResultsUfoSvg from '../../assets/no-results-ufo.svg';
// import smallBlob from '../../assets/blob-2.svg';
import StyledTitle from '../ui/elements/headers';

export default function RecentlyViewedBooks() {
  const { viewedBooks: books } = useAppSelector((state) => state.viewedBooks);

  return (
    <div>
      <StyledTitle>Recently viewed books</StyledTitle>
      {books.length == 0 ? (
        <StyledNoBooks data-testid="recently-viewed-empty-state">
          {/* <StyledBlob draggable={false} src={smallBlob} alt="Blob" /> */}
          <StyledIllustration
            draggable={false}
            src={noResultsUfoSvg}
            alt="No recently viewed books"
          />
          <p>It's lonely out here. Start browsing books.</p>
        </StyledNoBooks>
      ) : (
        <StyledViewedBooksList>
          {books.map((book, i) => (
            <ViewedBookItem book={book} key={i} />
          ))}
        </StyledViewedBooksList>
      )}
    </div>
  );
}
