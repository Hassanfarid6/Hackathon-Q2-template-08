import Navbar from "./components/Navbar";
import Categories from "./components/categories";
import HotProduct from "./components/hotproducts";
import OurProduct from "./components/ourProduct";
export default function Home() {
  return (
    <>
    <Navbar />
    <Categories />
      <HotProduct />
    <OurProduct />
    </>
  );
}
