import "@/styles/menus.css";
import "@/app/globals.css";
import { usePathname, useRouter } from "next/navigation";

const Menus = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="hidden md:block fixed h-full bg-neutral drop-shadow-lg rounded-r-3xl px-4 pt-4">
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
  );
};

export default Menus;
