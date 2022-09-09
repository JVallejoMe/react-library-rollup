import { GridColDef } from "@mui/x-data-grid";
import { Monster } from "./Monster";

export class MonsterTable {
  public tableRawData: Monster[] = [];

  public columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "description", headerName: "Description", width: 300 },
    {
      field: "species",
      headerName: "Species",
      width: 150,
    },
    {
      field: "type",
      headerName: "Type",
      description: "Type of monster.",
      sortable: false,
    },
    {
      field: "locations",
      headerName: "Locations",
      description: "Locations where monsters can be found",
      sortable: false,
      width: 530,
    },
  ];

  public rows: any[] = [];

  constructor(data: any = []) {
    this.tableRawData = data.map((el: any) => new Monster(el));

    this.rows = this.tableRawData.map((el: Monster) => {
      return {
        ...el,
        locations: el.locations.reduce(
          (prev, curr) => (prev ? prev + ", " : "") + curr.name,
          ""
        ),
      };
    });
  }
}
