import ClientOnly from './_components/ClientOnly';
import Container from './_components/Container';

export default async function Root({
  searchParams,
  testing,
}: {
  searchParams: string;
  testing: string;
}) {
  return (
    <ClientOnly>
      <Container>
        <div>
          <h1>Hello world</h1>
        </div>
      </Container>
    </ClientOnly>
  );
}
