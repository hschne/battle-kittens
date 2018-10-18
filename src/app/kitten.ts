export class Kitten {

  constructor(public id: number = 1,
              public name: string = 'Kitten',
              public speed: number = 10,
              public strength: number = 10,
              public cuteness: number = 10,
              public avatar: string = '') {
  }
}

export const KITTENS: Kitten[] = [
  {id: 1, name: 'Cassandra', speed: 78, strength: 50, cuteness: 89, avatar: 'https://i.ebayimg.com/images/g/gqIAAOSw4NVbZcoc/s-l300.jpg'},
  {
    id: 2,
    name: 'Anders',
    speed: 56,
    strength: 83,
    cuteness: 31,
    avatar: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4Ni8yODAvb3JpZ2luYWwvdmlraW5nLWtpdHRlbi5qcGc='
  },
  {id: 3, name: 'Bull', speed: 12, strength: 100, cuteness: 30, avatar: 'https://cdn140.picsart.com/259276645003202.jpg?r1024x1024'},
  {id: 4, name: 'Alistair', speed: 64, strength: 29, cuteness: 91, avatar: 'https://i.redd.it/24taydfs74bz.jpg'},
  {
    id: 5,
    name: 'Kaidan',
    speed: 34,
    strength: 70,
    cuteness: 2,
    avatar: 'https://www.ardeaprints.com/p/172/cat-7-month-old-persian-kitten-studio-paw-13438039.jpg'
  },
  {
    id: 6,
    name: 'Flemeth',
    speed: 55,
    strength: 21,
    cuteness: 9,
    avatar: 'https://i.pinimg.com/236x/52/45/2e/52452e4b61bd74c2ab65659dc31c5295--random-facts-the-movie.jpg'
  },
  {
    id: 7,
    name: 'Miranda',
    speed: 60,
    strength: 61,
    cuteness: 72,
    avatar: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/05/angry-kittens-7-591aef38bedce__700.jpg'
  },
  {
    id: 8,
    name: 'Wrex',
    speed: 20,
    strength: 96,
    cuteness: 43,
    avatar: 'https://c1.staticflickr.com/3/2591/3959888385_3580cd572c_z.jpg?zz=1'
  },
  {id: 9, name: 'Hawke', speed: 30, strength: 42, cuteness: 88, avatar: 'https://i.imgur.com/J9xDTRC.jpg'},
  {
    id: 10,
    name: 'Leliana',
    speed: 78,
    strength: 15,
    cuteness: 32,
    avatar: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/05/angry-kittens-25-591c02dd8eece__700.jpg'
  },
];

