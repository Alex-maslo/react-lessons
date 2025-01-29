import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParam, setSearchParam] = useSearchParams({ page: "1" });
  return <div></div>;
};

export default Pagination;
