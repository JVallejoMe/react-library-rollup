import { Skeleton } from "@mui/material";
import React from "react";

const TableSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={60}
        style={{ marginBottom: "8px" }}
      />
      <Skeleton variant="rectangular" width={"100%"} height={500} />
    </>
  );
};

export default TableSkeleton;
