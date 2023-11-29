import { createContext, useState } from "react";
import Checkout from "./checkout";
export const ProductContext = createContext();
const productsData = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
];

const Products = () => {
  const [qty, setQty] = useState(1);
  const contextValue = {
    productsData,
    qty,
    setQty,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      <Checkout />
    </ProductContext.Provider>
  );
};

export default Products;
