import hotproducts from "./components/hotproducts";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/categories";
import HotProduct from "./components/hotproducts";
// import Footer from "./components/footer";
// import ParentComponent from "./components/ParentComponent";

export default function Home() {
  return (
    <>
    <Navbar />
    <Categories />
    {/* <Footer /> */}
    {/* <Hero /> */}
      <HotProduct />
      {/* <ArrayMap /> */}
    </>
  );
}
