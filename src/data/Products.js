 // src/data/products.js
export const products = [
  {
    id: 1,
    name: "Nike Air Max 2090",
    brand: "Nike",
    price: 3000,
    sizes: [7, 8, 9, 10, 11, 12],
    description: "Step into the future with the Nike Air Max 2090. Featuring revolutionary Air cushioning and a futuristic design that pays homage to the iconic Air Max 90.",
    image: "/Images/products/nike.jpg",
    trending: true,
    color: "Solar Red"
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    price: 5000,
    sizes: [7, 8, 9, 10, 11],
    description: "Experience ultimate energy return with Boost technology. The Ultraboost 22 offers unparalleled comfort and style for the modern athlete.",
    image: "/Images/products/adidas%20red%20sneaker.jpg",
    trending: true,
    color: "Core Black"
  },
  {
    id: 3,
    name: "Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 2200,
    sizes: [7, 8, 9, 10, 11, 12, 13],
    description: "Kanye West's iconic Yeezy Boost 350 V2 combines Primeknit construction with Boost cushioning for a comfortable, stylish sneaker.",
    image: "/Images/products/nike%20women%20pink%20new.jpg",
    trending: true,
    color: "Zebra"
  },
  {
    id: 4,
    name: "Nike Dunk Low Retro",
    brand: "Nike",
    price: 1500,
    sizes: [6, 7, 8, 9, 10, 11],
    description: "The Nike Dunk Low Retro brings back classic '80s basketball style with modern comfort and timeless design.",
    image: "/Images/products/new%20black%20sneaker.jpg",
    trending: true,
    color: "University Blue"
  },
  {
    id: 5,
    name: "New Balance 990v5",
    brand: "New Balance",
    price: 1750,
    sizes: [7, 8, 9, 10, 11, 12],
    description: "Made in USA quality meets premium comfort. The 990v5 features ENCAP midsole technology for superior support.",
    image: "/Images/products/adidas%20black.jpg",
    trending: false,
    color: "Gray"
  },
  {
    id: 6,
    name: "Air Jordan 1 Retro High",
    brand: "Nike",
    price: 1700,
    sizes: [7, 8, 9, 10, 11, 12],
    description: "The shoe that started it all. The Air Jordan 1 Retro High OG brings back the classic that changed basketball forever.",
    image: "/Images/products/danilo-capece-shoe.jpg",
    trending: true,
    color: "Bred"
  },
  {
    id: 7,
    name: "Puma RS-X",
    brand: "Puma",
    price: 1600,
    sizes: [7, 8, 9, 10, 11],
    description: "Bold colors and chunky silhouette define the Puma RS-X. A statement piece for the fashion-forward sneakerhead.",
    image: "/Images/products/women%20pink.jpg",
    trending: true,
    color: "Electric"
  },
  {
    id: 8,
    name: "Reebok Classic Leather",
    brand: "Reebok",
    price: 1050,
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "Timeless style meets everyday comfort. The Reebok Classic Leather is a versatile sneaker for any occasion.",
    image: "/Images/products/yellow.jpg",
    trending: true,
    color: "White"
  }
];

export const brands = [...new Set(products.map(product => product.brand))];
export const colors = [...new Set(products.map(product => product.color))];