import PaginationClient from "../../client/ClientPagination";

export default function Pagination({ totalPages = 3, currentPage = 1 }) {
  return (
    <div>
      <PaginationClient totalPages={totalPages} initialPage={currentPage} />
    </div>
  );
}
