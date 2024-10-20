import { useEffect } from "react";
import Header from "./pages/Header";
import ProductArea from "./pages/ProductArea";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-gray-100");

    // Optionally, clean up the class on component unmount
    return () => {
      document.body.classList.remove("bg-gray-100");
    };
  }, []);

  return (
    <>
      <Header />
      <ProductArea />
    </>
  );
}

export default App;
