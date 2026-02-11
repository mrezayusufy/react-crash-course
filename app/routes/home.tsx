import type { Route } from "./+types/home";
import { useState } from "react";
import { ProductCard, ProductList } from "~/components";
import { products as _products } from "~/data/products";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [products, setProducts] = useState(_products);
  const [favList, setFavList] = useState([]);
  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 999
    },
    other: "other value"
  })
  const onPurchase = (product) => {

    alert(`You clicked on ${product.title} which cost $${product.price}`);
  }
  const onFav = (id) => {
    if (favList.includes(id)) {
      setFavList(prev => prev.filter(i => i !== id))
    } else {
      setFavList(prev => [...prev, id])
    }
  }
  return <ProductList>
    {products.filter(i => filters).map((item) => (
      <ProductCard key={item.title} product={item} onPurchase={onPurchase} background={item.bg} isFav={favList.includes(item.id)} onFav={onFav} />
    ))}
  </ProductList>;
}
