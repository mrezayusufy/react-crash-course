import { cn } from "~/utils/cn";

export const ProductCard = ({ product, background = "bg-amber-400", onPurchase }) => {

  return (
    <article className={cn("p-4 flex max-w-2xs flex-col gap-4 mx-auto border border-gray-400 rounded-2xl", background)} >
      <h2 className="font-bold text-2xl">{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        width={128}
        height={128}
      />
      <p>Specifications</p>
      <ul>
        {product.spec.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Status stockCount={product.stockCount} />
      {product.stockCount > 0 && (
        <button onClick={() => onPurchase(product)} className="bg-white text-gray-900 p-4 rounded-2xl">
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