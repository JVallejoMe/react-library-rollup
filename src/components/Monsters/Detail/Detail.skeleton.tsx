import { Skeleton } from "@mui/material";
import React from "react";

const DetailSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={100}
        style={{ marginBottom: "8px" }}
      />

      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={100}
        style={{ marginBottom: "8px" }}
      />

      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={100}
        style={{ marginBottom: "8px" }}
      />
    </>
  );
};

export default DetailSkeleton;
