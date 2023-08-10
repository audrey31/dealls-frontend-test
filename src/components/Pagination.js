import React, { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];

    // Calculate the starting and ending page numbers to display
    const startPage = Math.max(currentPage - 1, 1);
    const endPage = Math.min(currentPage + 1, totalPages);

    // Add the starting pages
    if (currentPage > 3) {
      pageNumbers.push(1, "...");
    } else {
      for (let i = 1; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    // Add the middle pages
    if (currentPage > 3 && currentPage <= totalPages - 3) {
      pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
    }

    // Add the last two pages
    if (totalPages - currentPage >= 3) {
      pageNumbers.push("...", totalPages - 1, totalPages);
    } else {
      for (let i = startPage; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="join justify-center">
      <button
        className="mr-2 btn btn-sm p-0"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg
          class="h-6 w-6 fill-current md:h-8 md:w-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
        </svg>
      </button>
      {generatePageNumbers().map((page, index) => (
        <button
          key={index}
          className={`join-item btn btn-sm ${
            page === currentPage ? "active" : ""
          } ${
            page === currentPage ? "btn-secondary pointer-events-none" : ""
          } ${page === "..." ? "btn-disabled" : ""}`}
          onClick={() => page !== "..." && onPageChange(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}
      <button
        className="ml-2 btn btn-sm p-0"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <svg
          class="h-6 w-6 fill-current md:h-8 md:w-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
