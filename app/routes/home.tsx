import type { Route } from "./+types/home";
import { useState } from "react";
import { ProductCard, ProductList } from "~/components";
import { ProductContext } from "~/context/index";
import { products as _products } from "~/data/products";



export function meta({ }: Route.MetaArgs) {
  return [
    { title: "React Crash Course Udemy" },
    { name: "description", content: "Welcome to my React Project!" },
  ];
}

export default function Home() {
  const [products, setProducts] = useState(_products);
  const [favList, setFavList] = useState([]);
  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 500
    },
    other: "other value"
  })
  const onPurchase = (id, stockCount) => {
    console.log("purchased!!!")
    setProducts((prev) =>
      prev.map(product =>
        product.id === id ? { ...product, stockCount } : product))
  }
  const onFav = (id) => {
    if (favList.includes(id)) {
      setFavList(prev => prev.filter(i => i !== id))
    } else {
      setFavList(prev => [...prev, id])
    }
  }
  return <section className="flex flex-col gap-4 p-8">
    <div>Products List</div>
    <ProductList>
      {products.map((item) => (
        <ProductCard
          key={item.title}
          product={item}
          onPurchase={onPurchase}
          background={item.bg}
          isFav={favList.includes(item.id)}
          onFav={onFav} />
      ))}
    </ProductList>
    <div>Products List by price</div>
    <ProductList>
      {products
        .filter(({ price }) => price >= filters.price.min && price <= filters.price.max)
        .map((item) => (
          <ProductCard
            key={item.title} product={item} onPurchase={onPurchase} background={item.bg} isFav={favList.includes(item.id)} onFav={onFav} />
        ))}
    </ProductList>
  </section>;
}
