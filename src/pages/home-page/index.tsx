import Container from '../../features/ui/elements/container';
import { PageContainer } from '../../features/ui/elements/container/container.styles';
import RecentlyViewedBooks from '../../features/viewed-books';

export default function HomePage() {
  return (
    <Container className="home-blob">
      <PageContainer>
        <RecentlyViewedBooks />
      </PageContainer>
    </Container>
  );
}
