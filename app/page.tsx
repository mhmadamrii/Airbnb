import ClientOnly from '@/components/ClientOnly';
import Media from '@/components/Media';

export default function Root() {
  return (
    <ClientOnly>
      <h1>Root page</h1>
      <Media />
    </ClientOnly>
  );
}
