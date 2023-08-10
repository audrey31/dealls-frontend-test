import "@/styles/menus.css";
import "@/app/globals.css";

const Menus = () => {
  return (
    <div className="hidden md:block fixed h-full bg-neutral drop-shadow-lg rounded-r-3xl px-4 pt-4">
      <h1 className="dashboard">Dashboard</h1>
      <ul className="menus-ul">
        <li>
          <button>Products</button>
        </li>
        <li>
          <button>Carts</button>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
