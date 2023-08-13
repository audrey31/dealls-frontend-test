import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import useApi from "@/hooks/useApi";
import { addCarts, addSkip, addTotal } from "@/redux/carts";

import { useRouter } from "next/navigation";

import Pagination from "./Pagination";

const Products = () => {
  const router = useRouter();
  const carts = useSelector((state) => state.carts.carts);
  const limit = useSelector((state) => state.carts.limit);
  const skip = useSelector((state) => state.carts.skip);
  const total = useSelector((state) => state.carts.totalPages);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const { data, isLoaded } = useApi(`carts?limit=${limit}&skip=${skip}`);

  useEffect(() => {
    dispatch(addCarts(data.carts));
    dispatch(addTotal(data.total));
  }, [data]);

  useEffect(() => {
    /**
     * in page 1 -> skip 0
     * in page 2 -> skip 5
     * in page 3 -> skip 10
     */

    let skipValue = 0;

    if (currentPage > 1) {
      skipValue = (currentPage - 1) * 5;
    }

    dispatch(addSkip(skipValue));
  }, [currentPage]);

  return (
    <>
      <div className="pt-8 px-4 md:px-12 flex-1 flex flex-col md:pl-[18rem]">
        <h1 className="page-title">Carts</h1>
        {isLoaded ? (
          <>
            <div className="overflow-x-auto mb-3">
              <table className="table overflow-x-auto">
                {/* head */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Products</th>
                    <th>Total</th>
                    <th>Discounted Total</th>
                    <th>Total Products</th>
                    <th>Total Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {carts &&
                    carts.map((cart) => (
                      <tr key={cart.id}>
                        <td>
                          <button
                            className="btn btn-secondary"
                            onClick={() => {
                              router.push(`carts/${cart.id}`);
                            }}
                          >
                            {cart.id}
                          </button>
                        </td>
                        <td>
                          {cart.products.map((product) => (
                            <ul className="list-disc">
                              <li>{product.title}</li>
                            </ul>
                          ))}
                        </td>
                        <td>${cart.total}</td>
                        <td>${cart.discountedTotal}</td>
                        <td>{cart.totalProducts}</td>
                        <td>{cart.totalQuantity}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <div className="loading loading-spinner loading-lg self-center mt-8"></div>
        )}
      </div>
    </>
  );
};

export default Products;
