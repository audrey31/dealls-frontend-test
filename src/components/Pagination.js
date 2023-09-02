import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];

    if (totalPages === 1) {
      // Only one page, display previous, 1, and next buttons
      return [
        <button
          key="prev"
          className="mr-2 btn btn-sm p-0"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg
            className="h-6 w-6 fill-current md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
          </svg>
        </button>,
        <button
          key="1"
          className={`btn btn-sm ${currentPage === 1 ? "active" : ""} ${
            currentPage === 1 ? "btn-secondary pointer-events-none" : ""
          }`}
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          1
        </button>,
        <button
          key="next"
          className="ml-2 btn btn-sm p-0"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg
            className="h-6 w-6 fill-current md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
          </svg>
        </button>,
      ];
    }

    // Calculate the starting and ending page numbers to display
    const startPage = Math.max(currentPage - 1, 1);
    const endPage = Math.min(currentPage + 1, totalPages);

    // Add the starting pages
    if (currentPage > 2) {
      pageNumbers.push(1);
      if (currentPage > 3) {
        pageNumbers.push("...");
      }
    }

    // Add the middle pages
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Add the last pages
    if (totalPages - currentPage > 1) {
      if (totalPages - currentPage > 2) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="join justify-center mb-6">
      <button
        className="mr-2 btn btn-sm p-0"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg
          className="h-6 w-6 fill-current md:h-8 md:w-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
        </svg>
      </button>
      {generatePageNumbers().map((page, index) =>
        React.isValidElement(page) ? (
          page // Display previous, 1, and next buttons as React elements
        ) : (
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
        )
      )}
      <button
        className="ml-2 btn btn-sm p-0"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <svg
          className="h-6 w-6 fill-current md:h-8 md:w-8"
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
