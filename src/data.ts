type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];


export const featuredProducts: Products = [
  {
    id: 1,
    title: "Fiery Pepperoni Crunch",
    desc: "Set your taste buds ablaze with spicy pepperoni, jalapeños, crushed red pepper flakes, and gooey mozzarella — delivering bold flavor in every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 2,
    title: "Smoky Bacon Blaze",
    desc: "Savor the smoky richness of flame-grilled beef, crispy bacon, melted cheddar, caramelized onions, and a splash of tangy BBQ sauce.",
    img: "/temporary/p2.png",
    price: 29.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 3,
    title: "Napoli Street Slice",
    desc: "An Italian classic with a crispy crust, fresh mozzarella, herbs, lettuce, tomatoes, and a tangy mayo twist.",
    img: "/temporary/p3.png",
    price: 24.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 4,
    title: "Red Chili Penne",
    desc: "A fiery penne pasta tossed in zesty tomato sauce with garlic, chili flakes, and fresh basil — the ultimate comfort meal.",
    img: "/temporary/p4.png",
    price: 26.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 5,
    title: "Inferno Burger",
    desc: "Bring on the heat with this bold burger — juicy beef, fiery jalapeños, pepper jack cheese, chipotle mayo, and classic fixings.",
    img: "/temporary/p5.png",
    price: 29.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 6,
    title: "Basil Bliss Margherita",
    desc: "A fresh take on the classic — sweet tomatoes, basil, creamy mozzarella, arugula, and a balsamic glaze over thin crust perfection.",
    img: "/temporary/p6.png",
    price: 24.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 7,
    title: "Creamy Garlic Twist",
    desc: "Creamy Parmesan linguine bursting with garlic flavor, finished with parsley, bell peppers, and sweet cherry tomatoes.",
    img: "/temporary/p7.png",
    price: 28.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 8,
    title: "Sun-Kissed Medley",
    desc: "A savory escape to the Mediterranean with tangy feta, Kalamata olives, sun-dried tomatoes, and a dash of oregano.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 9,
    title: "Tropical Blaze Burger",
    desc: "Taste island vibes with teriyaki-glazed beef, grilled pineapple, crispy bacon, lettuce, and toasted bun perfection.",
    img: "/temporary/p9.png",
    price: 29.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: "Fiery Pepperoni Crunch",
    desc: "Spicy pepperoni, jalapeños, red pepper flakes, and melted mozzarella combine for a bold, fiery flavor experience.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 2,
    title: "Sun-Kissed Medley",
    desc: "Feta, Kalamata olives, sun-dried tomatoes, and oregano bring Mediterranean flavors to a savory thin-crust base.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 3,
    title: "Napoli Street Slice",
    desc: "Crispy crust, tangy tomato sauce, mozzarella, herbs, and fresh veggies come together in this Neapolitan-style treat.",
    img: "/temporary/p3.png",
    price: 26.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 4,
    title: "Pesto Verde Delight",
    desc: "Bright and fresh — thin crust topped with basil pesto, veggies, and creamy mozzarella for a refreshing twist.",
    img: "/temporary/p10.png",
    price: 28.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 5,
    title: "Garden Burst Pizza",
    desc: "A veggie lover’s dream with a crispy base, tomato sauce, herbs, and a colorful medley of garden-fresh toppings.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 6,
    title: "Cheesy Harmony",
    desc: "A rich blend of mozzarella, cheddar, provolone, and Parmesan delivers gooey, golden, cheesy perfection.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
];
export const singleProduct: Product = {
  id: 1,
  title: "Fiery Pepperoni Crunch",
  desc: "Turn up the heat with spicy pepperoni, jalapeños, red pepper flakes, and creamy mozzarella — a fiery classic.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    { title: "Small", additionalPrice: 0 },
    { title: "Medium", additionalPrice: 4 },
    { title: "Large", additionalPrice: 6 },
  ],
};



type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Rustic Italian Pastas",
    desc: "Enjoy handcrafted Italian pasta dishes made with passion and authentic flavors.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Signature Burgers",
    desc: "Satisfy your cravings with our juicy patties, bold seasonings, and gourmet toppings.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Stone-Fired Pizzas",
    desc: "Dive into cheesy heaven with irresistible slices and delicious toppings made to perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];
