import ProductCard from "../components/ProductCard";

const ProductArea = () => {
  return (
    <>
      <div className="w-10/12 mx-auto flex">
      {/* <h2 className="font-bold text-2xl mt-10 ms-24 p-2">Kitchenware</h2> */}
      <div className="w-8/12 mt-5 gap-3">
        <div className=" grid grid-cols-3 gap-2 flex-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />

          {/* <h2 className="font-bold text-2xl mt-10 ms-24 p-2">Kitchenware</h2> */}
          <ProductCard />
          <ProductCard />
          <ProductCard />

          {/* <h2 className="font-bold text-2xl mt-10 ms-24 p-2">Kitchenware</h2> */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className="w-4/12">
          <div className="">
            <div className="border p-7 rounded-lg">
              <h3 className="font-medium text-lg">Have coupon?</h3>
              <div className="flex flex-row mt-4">
                <input
                  className="border ps-2 rounded-s-lg"
                  type="text"
                  placeholder="Coupon code"
                />
                <button className="bg-pink-500 text-white font-normal px-4 py-2 rounded-e-lg">
                  Apply
                </button>
              </div>
            </div>

            <div className="border p-7 rounded-lg mt-4">
              <h3 className="font-medium text-lg">1. Home Cooker</h3>
              <h3 className="font-medium text-lg py-2">2. Sports Cates</h3>
              <h3 className="font-medium text-lg pb-3">3. Home Cooker</h3>
              <hr className="" />
              <h3 className="font-medium text-lg py-2">
                Total price: <span className="text-gray-400">257.00 TK</span>
              </h3>
              <h3 className="font-medium text-lg">
                Discount: <span className="text-gray-400">257.00 TK</span>
              </h3>
              <h3 className="font-medium text-lg pt-2 pb-3">
                Total: <span>205.00 TK</span>
              </h3>
              <hr />

              <div className="text-center">
                <button className="bg-pink-500 text-white font-normal px-10 py-2 rounded-lg mt-4">
                  Make Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProductArea;
