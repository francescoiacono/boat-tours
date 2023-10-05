import { Footer, Navbar } from '@/components/ui';
import { Gallery, Hero, Signposts } from './sections';

export const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Signposts title={'Cruises'} />
      <Gallery />
      <Footer />
    </main>
  );
};
