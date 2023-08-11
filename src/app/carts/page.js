"use client";

import Menus from "@/components/Menus";
import "@/app/globals.css";
import Carts from "@/components/Carts";

const CartsPage = () => {
  return (
    <>
      <main className="">
        <Menus />
        <Carts />
      </main>
    </>
  );
};

export default CartsPage;
