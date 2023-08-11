"use client";

import Menus from "@/components/Menus";
import "@/app/globals.css";
import Products from "@/components/Products";

const ProductsPage = () => {
  return (
    <>
      <main className="">
        <Menus />
        <Products />
      </main>
    </>
  );
};

export default ProductsPage;
