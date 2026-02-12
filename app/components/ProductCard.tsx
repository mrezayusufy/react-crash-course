import { cn } from "~/utils/cn";

import {
  useState
} from 'react';
export const ProductCard = ({ product, background = "bg-amber-400", onPurchase, onFav, isFav }) => {

  const [showMore, setShowMore] = useState(false);
  const handlePurchase = () => {
    onPurchase(product.id, product.stockCount - 1);
  }
  return (
    <article className={cn("p-4 w-64 flex flex-col gap-4 mx-auto border border-gray-400 rounded-2xl relative", background)} >
      <button className="absolute top-0 right-0 p-4 cursor-pointer hover:scale-110 transition" onClick={() => onFav(product.id)}>{isFav ? "❤" : "🤍"}</button>
      <h2 className="font-bold text-2xl">{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        width={128}
        height={128}
        className="mx-auto"
      />
      <div className="flex justify-between">
        <p>Specifications</p>
        <button className="cursor-pointer hover:text-black transition" onClick={() => setShowMore(!showMore)}>{showMore ? 'hide' : 'show'}</button>
      </div>
      {showMore && <ul>
        {product.spec.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>}
      <Status stockCount={product.stockCount} />
      <div>${product.price}</div>
      {product.stockCount > 0 && (
        <button onClick={handlePurchase} className="bg-white text-gray-900 p-4 rounded-2xl">
          Buy 🛒
        </button>
      )}
    </article>
  );
};

const Status = ({ stockCount }) => {
  const notAvailableTemplate = (
    <p style={{ fontSize: "14px", color: "lightsalmon" }} >Not available</p>
  );

  const availableTemplate = (
    <p style={{ fontSize: "14px", color: "lightgreen" }}>
      {stockCount} items available
    </p>
  );

  return stockCount === 0 ? notAvailableTemplate : availableTemplate;
}