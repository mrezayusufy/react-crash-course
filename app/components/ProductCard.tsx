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
        {product.spec.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={() => onPurchase(product)} className="bg-white text-black p-4 rounded-2xl">
        Buy (From {product.price})
      </button>
    </article>
  );
};
