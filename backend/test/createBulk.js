import Product from "../src/models/product";

export default function createBulk() {
  const products = [...Array(40).keys()].map((i) => ({
    name: `product${i}`,
    numOfProducts: i,
    productImage:
      "https://res.cloudinary.com/dcljapgr4/image/upload/v1641973790/ahoee82mr3jb6xvyrrp5.jpg",
    price: 1000,
  }));

  Product.insertMany(products, (err, docs) => {
    console.log(docs);
  });
}
