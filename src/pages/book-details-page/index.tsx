import Container from '../../features/ui/elements/container';
import { PageContainer } from '../../features/ui/elements/container/container.styles';
import BookDetails from '../../features/book-details';

export default function BookDetailsPage() {
  return (
    <Container className="book-details-blob">
      <PageContainer>
        <BookDetails />
      </PageContainer>
    </Container>
  );
}
