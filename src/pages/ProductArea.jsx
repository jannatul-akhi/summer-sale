import ProductCard from "../components/ProductCard";

const ProductArea = () => {
  return (
    <>
      <h2 className="font-bold text-2xl mt-10 ms-24 p-2">Kitchenware</h2>
      <div className="flex w-10/12 mx-auto gap-3">
        <div className="w-[68%] mt-5 mb-20">
          <div className=" grid grid-cols-3 gap-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <h2 className="font-bold text-2xl mt-10 mb-4">Sportsware</h2>
          <div className=" grid grid-cols-3 gap-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <h2 className="font-bold text-2xl mt-10 mb-4">Furniture</h2>
          <div className=" grid grid-cols-3 gap-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>


        <div className="w-[28%] mt-5">
          <div className="rounded-lg">
            <div className="bg-white border-0 p-7 rounded-lg">
              <h3 className="font-medium text-lg">Have coupon?</h3>
              <div className="flex flex-row mt-4">
                <input
                  className="border ps-2 rounded-s-lg"
                  type="text"
                  placeholder="Coupon code"
                />
                <button className="bg-pink-500 text-white font-normal px-3 py-2 rounded-e-lg">
                  Apply
                </button>
              </div>
            </div>

            <div className="border-0 bg-white px-7 pt-7 rounded-lg mt-4 relative">
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
                Total: <span className="text-gray-400"> 205.00 TK</span>
              </h3>
              <hr className="pb-10" />

              <div className="text-center">
                <button className="bg-pink-500 text-white font-normal w-3/4 px-8 py-3 rounded-lg absolute bottom-[-24px] left-[32px]">
                  Make Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductArea;
