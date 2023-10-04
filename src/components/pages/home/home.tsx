import { Footer, Navbar } from '@/components/ui';
import { Gallery, Hero, Signposts, Stories } from './sections';

export const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Signposts />
      <Gallery />
      <Footer />
    </main>
  );
};
