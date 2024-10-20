import { useEffect } from "react";
import Header from "./pages/Header";
import ProductArea from "./pages/ProductArea";

function App() {
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <>
      <Header />
      <ProductArea />
    </>
  );
}

export default App;
