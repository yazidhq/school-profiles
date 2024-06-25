import DataTable from "react-data-table-component";
import { RiFolderAddFill } from "react-icons/ri";
import OrangeButton from "./OrangeButton";
import LinkButton from "./LinkButton";

const DataTables = ({
  is_search = true,
  is_paginate = true,
  search,
  handleSearch,
  columns,
  filteredData,
}) => {
  return (
    <div>
      {is_search && (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <OrangeButton>
                <RiFolderAddFill />
              </OrangeButton>
            </div>
            <div className="fw-medium">
              <LinkButton is_active={true}>Dawuan</LinkButton>
              <LinkButton is_active={false}>Tirtamulya</LinkButton>
            </div>
            <div>
              <input
                type="text"
                placeholder="Cari unit"
                value={search}
                onChange={handleSearch}
                className="form-control"
              />
            </div>
          </div>
          <hr />
        </>
      )}
      <DataTable
        columns={columns}
        data={filteredData}
        pagination={is_paginate && true}
      />
    </div>
  );
};

export default DataTables;
