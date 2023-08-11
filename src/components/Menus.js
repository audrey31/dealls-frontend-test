import "@/styles/menus.css";
import "@/app/globals.css";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Menus = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <>
      <div className="block md:hidden z-10 fixed right-[8vw] top-[4.5vh]">
        <button
          className="btn"
          onClick={() => setIsDashboardOpen(!isDashboardOpen)}
        >
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isDashboardOpen ? "" : "hidden"
        } md:block fixed h-full bg-neutral drop-shadow-lg rounded-r-3xl px-4 pt-4 z-10`}
      >
        <h1 className="dashboard">Dashboard</h1>

        <ul className="menus-ul">
          <li>
            <button
              className={pathName === "/products" && "nav-active"}
              onClick={() => router.push("/products")}
            >
              Products
            </button>
          </li>
          <li>
            <button
              className={pathName === "/carts" && "nav-active"}
              onClick={() => router.push("/carts")}
            >
              Carts
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menus;
