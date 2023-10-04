import { Navbar } from '@/components/ui';
import { Hero, Signposts } from './sections';

export const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Signposts />
    </main>
  );
};
