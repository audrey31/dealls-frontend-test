"use client";

import Menus from "@/components/Menus";
import "@/app/globals.css";
import CartsDetail from "@/components/CartsDetail";
import { useRouter } from "next/navigation";

const CartsDetailPage = () => {
  const router = useRouter();

  return (
    <>
      <main className="">
        <Menus />
        <CartsDetail />
      </main>
    </>
  );
};

export default CartsDetailPage;
