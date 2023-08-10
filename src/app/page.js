"use client";

import Menus from "@/components/Menus";
import "@/app/globals.css";
import Products from "@/components/Products";

import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="">
        <Menus />
        <Products />
      </main>
    </Provider>
  );
}
