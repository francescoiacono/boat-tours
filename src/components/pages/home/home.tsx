import { Footer, Navbar } from '@/components/ui';
import { Gallery, Hero, Location, Signposts } from './sections';

export const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Signposts />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
};
