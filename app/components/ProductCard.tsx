export const ProductCard = () => {
  return (
    <article className="p-4 flex max-w-2xs flex-col gap-4 mx-auto">
      <h2>IPhone 15 Pro</h2>
      <img
        src="/images/iphone.png"
        alt="IPhone 15 pro"
        width={128}
        height={128}
      />
      <p>Specifications</p>
      <ul>
        <li>A17 Pro chip with 6-core GPU</li>
        <li>3x or 5x Telephoto camera</li>
        <li>Up to 29 hours video playback</li>
      </ul>
      <button className="bg-white text-black p-4 rounded-2xl">
        Buy (From $999)
      </button>
    </article>
  );
};
