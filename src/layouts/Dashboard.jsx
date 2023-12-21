import * as React from "react";
import StickyHeader from "../components/Stickyheader";
import { ProductCard } from "../components/ProductCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Dashboard = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      await getDocs(collection(db, "Products")).then((qs) => {
        const newData = qs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        setProducts(newData);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // <div className=" w-full h-screen">
    //   <StickyHeader />
    //   <div class="container mx-auto p-2 md:px-4">
    //     <div class="flex flex-wrap">
    //       {products.map((item, index) => {
    //         return <ProductCard data={item} />;
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white">
      <StickyHeader />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
