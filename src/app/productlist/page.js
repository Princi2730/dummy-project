import Price from "./price";
import Image from "next/image";
import product from "./product.module.css";
import Link from "next/link";

async function productlist() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

const page = async () => {
  let products = await productlist();
  // console.log("products",products)
  return (
    <div>
      {/* <Image
        src="https://pixabay.com/images/search/flower/"
        width={200}
        height={200}
      /> */}
      <h2>Item List</h2>
      {products.map((item) => (
        <div key={item.id}>
          <Link href={`/productlist/${item.id}`}>{item.title}</Link>
          {/* <h3 className={product.main}>{item.title}</h3> */}
          {/* <Price price={item.price} /> */}
        </div>
      ))}
    </div>
  );
};

export default page;
