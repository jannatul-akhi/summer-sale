import summer from "../assets/images/Summer_1.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-2 bg-orange-100 px-[150px] text-black">
      <div className="text-center">
        <h3 className="font-medium">---SALE FEVER---</h3>
        <h1 className="text-3xl font-bold pt-[25px] pb-[40px]">
          Purchase TK 200 or <br /> above & get{" "}
          <span className="text-pink-500">20% off</span>
        </h1>
        <div className="flex justify-center items-center gap-2"> 
          <p>Use Promo Code</p>
          <button className="border-0 bg-pink-500 text-white rounded-md px-4 py-2">SELL200</button>
        </div>
      </div>
      <div>
        <img className="h-[600px] w-[600px]" src={summer} alt="" />
      </div>
    </div>
  );
};

export default Header;
