import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import useApi from "@/hooks/useApi";
import { changeProducts } from "@/redux/products";

import Pagination from "./Pagination";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const limit = useSelector((state) => state.products.limit);
  const skip = useSelector((state) => state.products.skip);
  const dispatch = useDispatch();

  const { data, isLoaded } = useApi(`products?limit=${limit}&skip=${skip}`);
  const dataCategories = useApi("products/categories");

  useEffect(() => {
    if (data.products) {
      dispatch(changeProducts(data.products));
    }
  }, [data.products, dispatch]);

  const [currentPage, setCurrentPage] = useState(1); // Change this to your initial active page
  const totalPages = 100; // Replace with the actual total number of pages
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="pt-8 px-4 md:px-12 flex-1 flex flex-col md:pl-[18rem]">
        <h1 className="page-title">Products</h1>
        {isLoaded && dataCategories.isLoaded ? (
          <>
            <div className="search-and-filter flex justify-between">
              <div>
                <details className="dropdown ">
                  <summary className="m-1 btn btn-secondary px-4 mr-2 md:px-8">
                    <span className="!uppercase">Filter</span>
                  </summary>
                  <ul className=" w-[85vw] md:w-auto shadow menu dropdown-content z-[1] bg-base-200 rounded-box ">
                    <div className="flex md:w-[27rem] flex-wrap mb-4">
                      <div className="w-full md:w-52">
                        <p className="px-4 font-bold text-[1rem] mt-2 text-warning">
                          Brand
                        </p>
                        <li>
                          <label className="label cursor-pointer w-full">
                            <span className="label-text">Apple</span>
                            <input
                              type="checkbox"
                              className="checkbox checkbox-primary"
                            />
                          </label>
                          <label className="label cursor-pointer w-full">
                            <span className="label-text">Samsung</span>
                            <input
                              type="checkbox"
                              className="checkbox checkbox-primary"
                            />
                          </label>
                          <label className="label cursor-pointer w-full">
                            <span className="label-text">Oppo</span>
                            <input
                              type="checkbox"
                              className="checkbox checkbox-primary"
                            />
                          </label>
                        </li>
                      </div>
                      <div className="w-full md:w-[14rem]">
                        <p className="px-4 font-bold text-[1rem] mt-2 text-warning">
                          Price Range
                        </p>
                        <li>
                          <label className="label cursor-pointer w-full">
                            <span className="label-text">Min Price</span>
                            <input
                              type="number"
                              placeholder="Min Price"
                              className="input input-bordered w-full max-w-xs "
                            />
                          </label>
                          <label className="label cursor-pointer w-full">
                            <span className="label-text">Max Price</span>
                            <input
                              type="number"
                              placeholder="Max Price"
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                        </li>
                      </div>
                      <div className="w-full ">
                        <p className="px-4 font-bold text-[1rem] mt-2 text-warning">
                          Categories
                        </p>
                        <li className="grid grid-cols-2">
                          {dataCategories.data.map((category) => (
                            <label className="label cursor-pointer w-full">
                              <span className="label-text capitalize">
                                {category}
                              </span>
                              <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                              />
                            </label>
                          ))}
                        </li>
                      </div>
                    </div>
                    <button className="btn btn-secondary">Apply Filter</button>
                  </ul>
                </details>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full md:w-auto md:max-w-xs "
                />
                <button class="btn btn-ghost ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto mb-3">
              <table className="table overflow-x-auto">
                {/* head */}
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.brand}</td>
                      <td>${product.price}</td>
                      <td>{product.stock}</td>
                      <td className="capitalize">{product.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={10}
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
