export interface Cruise {
  id: number;
  name: string;
  description: string;
  price: number;
  link: string;
  image: string;
}

export const cruises: Cruise[] = [
  {
    id: 1,
    name: 'Blue Grotto Adventures',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            molestias illum cum dolores nemo saepe culpa a animi pariatur voluptas
            quidem placeat perspiciatis ipsum officiis commodi necessitatibus,
            modi ipsam vero!`,
    price: 99,
    link: 'https://www.google.com',
    image: '/assets/images/pages/cruises/toy-boat.jpg',
  },
  {
    id: 2,
    name: 'Aqua Azzurra Explorers',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        molestias illum cum dolores nemo saepe culpa a animi pariatur voluptas
        quidem placeat perspiciatis ipsum officiis commodi necessitatibus,
        modi ipsam vero!`,
    price: 50,
    link: 'https://www.google.com',
    image: '/assets/images/pages/cruises/toy-boat.jpg',
  },
  {
    id: 3,
    name: 'Neptune’s Pathway Tours',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            molestias illum cum dolores nemo saepe culpa a animi pariatur voluptas
            quidem placeat perspiciatis ipsum officiis commodi necessitatibus,
            modi ipsam vero!`,
    price: 40,
    link: 'https://www.google.com',
    image: '/assets/images/pages/cruises/toy-boat.jpg',
  },
  {
    id: 4,
    name: 'Vesuvius Vista Voyages ',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        molestias illum cum dolores nemo saepe culpa a animi pariatur voluptas
        quidem placeat perspiciatis ipsum officiis commodi necessitatibus,
        modi ipsam vero!`,
    price: 120,
    link: 'https://www.google.com',
    image: '/assets/images/pages/cruises/toy-boat.jpg',
  },
];
