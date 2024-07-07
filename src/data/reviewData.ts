interface Review {
  text: string;
  author: {
    name: string;
    role: string;
  };
  image: string;
}

export const reviews: Review[] = [
  {
    author: {
      name: "John Smith",
      role: "Client/Buyer",
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "https://i.pravatar.cc/300"
  },
  {
    author: {
      name: "Andrew Green",
      role: "Client/Buyer",
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro magni rerum deleniti error iste ut voluptatem vero nobis soluta!",
    image: "https://i.pravatar.cc/300"
  },
  {
    author: {
      name: "Angeline Buff",
      role: "Client/Buyer",
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro magni rerum deleniti error iste ut voluptatem vero nobis soluta! Pariatur porro magni rerum deleniti error iste ut voluptatem vero nobis soluta!",
    image: "https://i.pravatar.cc/300"
  },
  {
    author: {
      name: "Angeline Buff",
      role: "Client/Buyer",
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro magni rerum deleniti error iste ut voluptatem vero nobis soluta!",
    image: "https://i.pravatar.cc/300"
  },
  {
    author: {
      name: "Andrew Green",
      role: "Client/Buyer",
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro magni rerum deleniti error iste ut voluptatem vero nobis soluta!",
    image: "https://i.pravatar.cc/300"
  },
];
