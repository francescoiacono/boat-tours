export interface Cruise {
  id: number;
  price: number;
  link: string;
  image: string;
}

export const cruises: Cruise[] = [
  {
    id: 1,
    price: 99,
    link: 'https://www.google.com',
    image: '/assets/images/pages/cruises/toy-boat.jpg',
  },
  {
    id: 2,
    price: 50,
    link: 'https://www.google.com',
    image: '/assets/images/pages/cruises/toy-boat.jpg',
  },
  {
    id: 3,
    price: 40,
    link: 'https://www.google.com',
    image: '/assets/images/pages/cruises/toy-boat.jpg',
  },
  {
    id: 4,
    price: 120,
    link: 'https://www.google.com',
    image: '/assets/images/pages/cruises/toy-boat.jpg',
  },
];
