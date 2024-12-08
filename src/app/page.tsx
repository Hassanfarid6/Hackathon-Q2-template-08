// import hotproducts from "./components/hotproducts";
import Navbar from "./components/Navbar";
// import ourProduct from "./components/ourProduct";
import Categories from "./components/categories";
import HotProduct from "./components/hotproducts";
import OurProduct from "./components/ourProduct";
// import Footer from "./components/footer";
// import ParentComponent from "./components/ParentComponent";

export default function Home() {
  return (
    <>
    <Navbar />
    <Categories />
      <HotProduct />
    <OurProduct />
      {/* <ArrayMap /> */}
    {/* <Footer /> */}
    </>
  );
}
