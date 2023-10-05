import { Footer, Navbar } from '@/components/ui';
import { Gallery, Hero, Location, Signposts } from './sections';

export const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Signposts title={'BT Cruises'} />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
};
