import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import TableSkeleton from "./Table.skeleton";
import { Monster, MonsterTable } from "../../../models";
import { MonsterCall } from "../../../services";

interface TableProps {
  onRowClick?: (data: Monster) => void;
  onSelect?: (data: Monster[]) => void;
  searchName: string | "";
  handleSearch: (data: string) => void;
}

const Table: React.FC<TableProps> = ({
  onRowClick,
  onSelect,
  searchName,
  handleSearch,
}) => {
  const [tableData, setTableData] = useState<MonsterTable | null>(null);

  useEffect(() => {
    const init = async () => {
      const res = await MonsterCall.getAllMonsters();
      setTableData(res);
    };

    init();
  }, []);

  useEffect(() => {
    if (tableData) {
      const selectedRowName = tableData!.tableRawData.find(
        (el) => el.name === searchName
      );
      if (selectedRowName) {
        onRowClick?.(selectedRowName);
      }
    }
  }, [searchName]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };

  const handleRowClick = (params: any) => {
    const selectedRow = tableData!.tableRawData.find(
      (el) => +el.id === params.id
    );

    if (selectedRow) {
      onRowClick?.(selectedRow);
    }
  };

  const handleSelect = (params: any) => {
    const data = tableData!.tableRawData.filter((el) =>
      params.includes(+el.id)
    );

    onSelect?.(data);
  };

  return tableData ? (
    <div style={{ width: "100%" }}>
      <TextField
        id="outlined-name"
        label="Name"
        value={searchName}
        onChange={handleChange}
      />
      <DataGrid
        disableSelectionOnClick={true}
        onSelectionModelChange={handleSelect}
        onRowClick={handleRowClick}
        autoHeight={true}
        rows={tableData.rows}
        columns={tableData.columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  ) : (
    <TableSkeleton />
  );
};

export default Table;
