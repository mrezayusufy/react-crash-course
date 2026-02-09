export const ProductCard = ({ product, background = "olive", onPurchase, ...rest }) => {

  return (
    <article className="p-4 bg-amber flex max-w-2xs flex-col gap-4 mx-auto border border-gray-400 rounded-2xl ">
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
        <button onClick={() => onPurchase(product)} className="bg-white text-black p-4 rounded-2xl">
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