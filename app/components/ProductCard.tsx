import { cn } from "~/utils/cn";
import React from "react"
export const ProductCard = ({ product, background = "bg-amber-400", onPurchase }) => {
  const [stockCount, setStockCount] = React.useState(product.stockCount);
  const [showMore, setShowMore] = React.useState(false);
  const handlePurchase = () => {
    onPurchase(product);
    setStockCount(stockCount - 1);
  }
  return (
    <article className={cn("p-4 w-64 flex flex-col gap-4 mx-auto border border-gray-400 rounded-2xl", background)} >
      <h2 className="font-bold text-2xl">{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        width={128}
        height={128}
      />
      <div className="flex justify-between">
        <p>Specifications</p>
        <button className="cursor-pointer" onClick={() => setShowMore(!showMore)}>{showMore ? 'hide' : 'show'}</button>
      </div>
      {showMore && <ul>
        {product.spec.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>}
      <Status stockCount={stockCount} />
      {stockCount > 0 && (
        <button onClick={handlePurchase} className="bg-white text-gray-900 p-4 rounded-2xl">
          Buy (From ${product.price})
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