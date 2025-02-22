"use client";

import { useState } from "react";

const PaginationClient = ({ totalPages, initialPage }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-between w-full p-4 bg-[#292a2c] text-white">
      <span className="text-sm">Showing 1 to 10 of 200 entries</span>

      <div className="flex items-center space-x-2">
        <button
          className={`px-3 py-1 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt; Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded-md text-sm ${
              currentPage === index + 1
                ? "bg-[#13728C] text-white"
                : "bg-[#292a2c] hover:bg-gray-600 text-gray-300"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`px-3 py-1 rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default PaginationClient;
