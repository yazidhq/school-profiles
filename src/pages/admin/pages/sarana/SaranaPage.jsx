import { useState } from "react";
import Section from "../../../../components/admin/Section";
import DataTables from "../../../../components/admin/components/DataTables";
import useSearch from "../../../../hooks/useSearch";

const SaranaPage = () => {
  const [search, setSearch, filteredData, setFilteredData] = useSearch();

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Position",
      selector: (row) => row.position,
      sortable: true,
    },
    {
      name: "Office",
      selector: (row) => row.office,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Start date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Salary",
      selector: (row) => row.salary,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: 61,
      startDate: "2011/04/25",
      salary: "$320,800",
    },
    {
      id: 2,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: 63,
      startDate: "2011/07/25",
      salary: "$170,750",
    },
  ];

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);

    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.position.toLowerCase().includes(value) ||
        item.office.toLowerCase().includes(value) ||
        item.age.toString().includes(value) ||
        item.startDate.toLowerCase().includes(value) ||
        item.salary.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };

  useState(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <Section>
      <DataTables
        search={search}
        handleSearch={handleSearch}
        columns={columns}
        filteredData={filteredData}
      />
    </Section>
  );
};

export default SaranaPage;
