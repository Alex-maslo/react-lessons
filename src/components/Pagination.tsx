import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParam, setSearchParam] = useSearchParams({ page: "1" });

  let currentPage = Number(searchParam.get("page") || "1");

  return (
    <div>
      <div className={`bg-red-600 p-4 flex justify-around`}>
        <button
          onClick={() => {
            if (currentPage >= 1) {
              setSearchParam({ page: (--currentPage).toString() });
            }
          }}
          className={`bg-green-700 p-2 text-white font-semibold`}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setSearchParam({ page: (++currentPage).toString() });
          }}
          className={`bg-blue-700 p-2 text-white font-semibold`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
