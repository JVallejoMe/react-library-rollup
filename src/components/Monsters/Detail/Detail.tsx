import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DetailSkeleton from "./Detail.skeleton";
import { Monster } from "../../../models";
import { MonsterCall } from "../../../services";
import { ECTable, ECCardNoId } from "./styles";

interface DetailProps {
  id?: string;
}

const Detail: React.FC<DetailProps> = ({ id }) => {
  const [monster, setMonster] = useState<Monster | null>(null);

  useEffect(() => {
    const getDetails = async () => {
      const res = await MonsterCall.getMonster(id!);
      setMonster(res);
    };

    setMonster(null);
    if (id) {
      getDetails();
    }
  }, [id]);

  const renderData = (data: Monster) => {
    const {
      id: monsterId,
      description,
      name,
      locations,
      resistances,
      species,
      type,
      weaknesses,
    } = data;

    return (
      <Card elevation={3} style={{ height: "inherit" }}>
        <CardContent>
          <Typography
            sx={{ mb: 1.5 }}
            variant="h5"
            color="text.secondary"
            gutterBottom
          >
            ({monsterId}) {name}
          </Typography>

          <Typography
            sx={{ mb: 1.5 }}
            variant="body2"
            color="text.secondary"
            gutterBottom
          >
            {description}
          </Typography>

          <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
            <b>Species</b>: {species}
          </Typography>

          <Typography
            variant="body2"
            sx={{ mb: 1.5 }}
            color="text.secondary"
            gutterBottom
          >
            <b>Type</b>: {type}
          </Typography>

          {locations.length !== 0 && (
            <Box mb={1.5}>
              <Typography variant="body2" color="text.secondary">
                <b>Locations</b>
              </Typography>
              <ECTable>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  {locations.map((loc, i) => (
                    <tr key={`${i}-locations`}>
                      <td>{loc.name || "-"}</td>
                      <td>{loc.zoneCount || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </ECTable>
            </Box>
          )}

          {resistances.length !== 0 && (
            <Box mb={1.5}>
              <Typography variant="body2" color="text.secondary">
                <b>Resistances</b>
              </Typography>
              <ECTable>
                <thead>
                  <tr>
                    <th>Condition</th>
                    <th>Element</th>
                  </tr>
                </thead>
                <tbody>
                  {resistances.map((res, i) => (
                    <tr key={`${i}-resistances`}>
                      <td>{res.condition || "-"}</td>
                      <td>{res.element || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </ECTable>
            </Box>
          )}

          {weaknesses.length !== 0 && (
            <Box mb={1.5}>
              <Typography variant="body2" color="text.secondary">
                <b>Weaknesses</b>
              </Typography>

              <ECTable>
                <thead>
                  <tr>
                    <th>Condition</th>
                    <th>Element</th>
                    <th>Stars</th>
                  </tr>
                </thead>
                <tbody>
                  {weaknesses.map((weak, i) => (
                    <tr key={`${i}-weaknesses`}>
                      <td>{weak.condition || "-"}</td>
                      <td>{weak.element || "-"}</td>
                      <td>{weak.stars || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </ECTable>
            </Box>
          )}
        </CardContent>
      </Card>
    );
  };

  if (!id) {
    return (
      <ECCardNoId elevation={3}>
        <Typography
          sx={{ mb: 1.5 }}
          variant="h5"
          color="text.secondary"
          gutterBottom
        >
          Select one row to get monsters details
        </Typography>
      </ECCardNoId>
    );
  }

  return monster ? renderData(monster) : <DetailSkeleton />;
};

export default Detail;
