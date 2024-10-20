import product1 from "../assets/images/prod1.png";

const ProductCard = () => {
  return (
    <div className="bg-white border-0 rounded-full">
      <div className=" p-4 bg-white text-black rounded-lg">
        <div className="bg-gray-100 rounded-lg flex justify-center items-center px-14 py-2">
          <img className="h-full w-full" src={product1} alt="" />
        </div>
        <div className="text-center pt-8">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>

          <h3 className="font-xl font-bold py-2">K. Accessories</h3>
          <p className="text-gray-400">39.00TK</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
