import { nanoid } from 'nanoid';
import appleWatch from '../assets/images/apple-watch.svg';
import bag from '../assets/images/bag.svg';
import belt from '../assets/images/belt.svg';
import bracelet from '../assets/images/bracelet.svg';
import cap from '../assets/images/cap.svg';
import earpods from '../assets/images/earpods.svg';
import gamepad from '../assets/images/gamepad.svg';
import gdress from '../assets/images/gdress.svg';
import heels from '../assets/images/heels.svg';
import nativeWear from '../assets/images/native-wear.svg';
import iphone from '../assets/images/iphone.svg';
import laptop from '../assets/images/laptop.svg';
import pdress from '../assets/images/pdress.svg';
import powerbank from '../assets/images/powerbank.svg';
import shirt from '../assets/images/shirt.svg';
import shoe from '../assets/images/shoe.svg';
import suit from '../assets/images/suit.svg';
import sweater from '../assets/images/sweater.svg';

const products = [
  {
    id: nanoid(),
    name: 'Joystick Game Controller',
    description: ' Wired UCOM USB Pad for PC',
    rating: 5,
    favorite: false,
    price: 11250,
    category: 'tech',
    img: gamepad,
  },
  {
    id: nanoid(),
    name: 'Apple IPhone 14 Pro',
    description: '6GB RAM + 128GB ROM',
    rating: 5,
    favorite: false,
    price: 1450000,
    category: 'tech',
    img: iphone,
  },
  {
    id: nanoid(),
    name: 'Touch Screen Smart Watch',
    description: 'For Andriod & IOS',
    rating: 5,
    favorite: true,
    price: 9170,
    category: 'tech',
    img: appleWatch,
  },
  {
    id: nanoid(),
    name: 'Itel Bluetooth Earphones',
    description: 'BUDS ACE Wireless Earphone',
    rating: 4,
    favorite: false,
    price: 17660,
    category: 'tech',
    img: earpods,
  },
  {
    id: nanoid(),
    name: 'HP ENVY 15 X360',
    description: 'INTEL Core i7 16GB RAM 512 SSD.....',
    rating: 5,
    favorite: false,
    price: 1300000,
    category: 'tech',
    img: laptop,
  },
  {
    id: nanoid(),
    name: 'Oriamo 2000mAh PowerBank',
    description: 'Type-C & Micro-USB input Fast Charge..',
    rating: 4,
    favorite: false,
    price: 19999,
    category: 'tech',
    img: powerbank,
  },
  // * MEN
  {
    id: nanoid(),
    name: `Men’s Belt Leather`,
    description: 'Buckle Brown Timeless Belt ',
    rating: 4,
    favorite: false,
    price: 17500,
    category: 'tech',
    img: belt,
  },
  {
    id: nanoid(),
    name: `Quality Plain Face Cap`,
    description: 'Plain Black Face Cap',
    rating: 5,
    favorite: false,
    price: 4000,
    category: 'men',
    img: cap,
  },
  {
    id: nanoid(),
    name: `Men’s Formal Lace Up Shoes`,
    description: 'Italian Brogues Leather Shoes',
    rating: 4,
    favorite: false,
    price: 21000,
    category: 'men',
    img: shoe,
  },
  {
    id: nanoid(),
    name: `Men’s Short Sleeve`,
    description: 'Casual Shirt - Black & Brown',
    rating: 5,
    favorite: false,
    price: 25900,
    category: 'men',
    img: shirt,
  },
  {
    id: nanoid(),
    name: `Men’s Three Piece Tuxedo`,
    description: 'Elegant Wedding Suit - Teal Green',
    rating: 4,
    favorite: false,
    price: 65990,
    category: 'men',
    img: suit,
  },
  {
    id: nanoid(),
    name: `DesubClassic Quality Agbada`,
    description: 'Black Agbada with a Black inner Top',
    rating: 4,
    favorite: false,
    price: 85000,
    category: 'men',
    img: nativeWear,
  },
  // * WOMEN
  {
    id: nanoid(),
    name: `Ladies Leather Chic Bag`,
    description: 'Office Trendy Handbag - Brown',
    rating: 4,
    favorite: false,
    price: 20950,
    category: 'women',
    img: bag,
  },
  {
    id: nanoid(),
    name: `Summer Tie Neck Long Dress`,
    description: 'Purple free Floral Dress',
    rating: 5,
    favorite: false,
    price: 10000,
    category: 'women',
    img: pdress,
  },
  {
    id: nanoid(),
    name: `Ladies Crystal Bracelet`,
    description: 'Silver Diamond Flower Bracelet',
    rating: 4,
    favorite: false,
    price: 3234,
    category: 'women',
    img: bracelet,
  },
  {
    id: nanoid(),
    name: `Scarlet Darkness Dress`,
    description: 'Summer Square Neck Sleeveless',
    rating: 4,
    favorite: false,
    price: 10500,
    category: 'women',
    img: gdress,
  },
  {
    id: nanoid(),
    name: `Brown Crop Top SweatShirt`,
    description: 'Denami Women Diamond sweats',
    rating: 4,
    favorite: false,
    price: 9500,
    category: 'women',
    img: sweater,
  },
  {
    id: nanoid(),
    name: `Corporate High Heel`,
    description: 'Leather cover shoe - Black',
    rating: 5,
    favorite: false,
    price: 32000,
    category: 'women',
    img: heels,
  },
];

export default products;
