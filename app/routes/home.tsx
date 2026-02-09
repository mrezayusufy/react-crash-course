import type { Route } from "./+types/home";
import { ProductCard, ProductList } from "~/components";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const products = [
    {
      image: "images/iphone.png",
      title: "iPhone 15 Pro",
      spec: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      stockCount: 10,
      price: 999,
    },
    {
      image: "images/airpods.png",
      title: "AirPods Pro 2",
      spec: [
        "Noise Cancellation",
        "Dust, sweat, and water resistant",
        "Up to 6 hours of listening",
      ],
      stockCount: 0,
      price: 249,
    },
    {
      image: "images/apple-watch.png",
      title: "Apple Watch 9",
      spec: [
        "45mm or 41mm case size",
        "Always-On Retina display",
        "Up to 18 hours normal use",
      ],
      stockCount: 20,
      price: 399,
    },
  ];
  const onPurchase = (product) => {
    alert(`You clicked on ${product.title} which cost $${product.price}`);
  }
  return <ProductList>
    {products.map((item) => (
      <ProductCard key={item.title} product={item} onPurchase={onPurchase} />
    ))}
  </ProductList>;
}
