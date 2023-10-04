import { Navbar } from '@/components/ui';
import { Gallery, Hero, Signposts } from './sections';

export const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Signposts />
      <Gallery />
    </main>
  );
};
