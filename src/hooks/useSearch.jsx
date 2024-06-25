import { useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  return [search, setSearch, filteredData, setFilteredData];
};

export default useSearch;
