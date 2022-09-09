import React from "react";

interface TableProps {
  label: string;
}

const Table = (props: TableProps) => {
  return <button>{props.label}</button>;
};

export default Table;
