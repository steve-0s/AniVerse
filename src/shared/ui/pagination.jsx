const Pagination = ({ currentPage = 1, totalPages = 1, onPageChange = () => {} }) => {
  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <button
        className="rounded-md border border-white/20 px-3 py-1 text-sm disabled:opacity-40"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Prev
      </button>
      <span className="text-sm text-gray-300">
        Page {currentPage} / {totalPages}
      </span>
      <button
        className="rounded-md border border-white/20 px-3 py-1 text-sm disabled:opacity-40"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
