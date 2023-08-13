import useApi from "@/hooks/useApi";
import { usePathname } from "next/navigation";

const CartsDetail = () => {
  const pathName = usePathname();
  const { data, isLoaded } = useApi(pathName.substring(1));

  return (
    <>
      <div className="pt-8 px-4 md:px-12 flex-1 flex flex-col md:pl-[18rem]">
        <h1 className="page-title">Carts Detail</h1>

        {isLoaded ? (
          <>
            <div className="grid gap-3 mb-4 grid-cols-2 md:grid-cols-3">
              <div className="stats shadow bg-secondary">
                <div className="stat">
                  <div className="stat-title">User ID</div>
                  <div className="stat-value">{data.userId}</div>
                </div>
              </div>
              <div className="stats shadow bg-secondary md:col-span-1">
                <div className="stat">
                  <div className="stat-title">Total</div>
                  <div className="stat-value">{data.total}</div>
                </div>
              </div>
              <div className="stats shadow bg-secondary col-span-2 md:col-span-1">
                <div className="stat">
                  <div className="stat-title">Discounted</div>
                  <div className="stat-value">{data.discountedTotal}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mb-4 sm:flex-row">
              <div className="stats shadow bg-secondary flex-1">
                <div className="stat">
                  <div className="stat-title">Total Products</div>
                  <div className="stat-value">{data.totalProducts}</div>
                </div>
              </div>
              <div className="stats shadow bg-secondary flex-1">
                <div className="stat">
                  <div className="stat-title">Total Quantity</div>
                  <div className="stat-value">{data.totalQuantity}</div>
                </div>
              </div>
            </div>

            <h1 className="page-title !text-xl">Products Detail</h1>
            <div className="overflow-x-auto mb-6">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Discount Percentage</th>
                    <th>Discounted Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data.products.map((product) => (
                    <tr>
                      <th>{product.title}</th>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>{product.total}</td>
                      <td>{product.discountPercentage}</td>
                      <td>{product.discountedPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="ml-52 loading loading-spinner loading-lg self-center mt-8"></div>
        )}
      </div>
    </>
  );
};

export default CartsDetail;
