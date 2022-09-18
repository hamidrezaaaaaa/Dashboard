import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

const TableRoot =styled(DataGrid)`
.MuiTablePagination-root{
    direction:ltr;
}
`

const columns = [
  { field: "id", headerName: "ردیف", width: 70 },
  { field: "state", headerName: "استان", width: 130 },
  { field: "city", headerName: "شهر", width: 130 },
  {
    field: "postCode",
    headerName: "کد پستی",
    type: "number",
    width: 90,
  },
  {
    field: "address",
    headerName: "آدرس",
    type: "text",
    width: 230,
  },
];

const rows = [
  { id: 1, city: "اصفهان", state: "اصفهان", postCode: 351231233512 ,address:"یه آدرس معمولی شامل خیابان و کوچه و پلاک و واحد"},
  { id: 2, city: "شیراز", state: "فارس", postCode: 4212321312 ,address:"یه آدرس معمولی شامل خیابان و کوچه و پلاک و واحد"},
  { id: 3, city: "تبریز", state: "آذربایجان", postCode: 459982376123 ,address:"یه آدرس معمولی شامل خیابان و کوچه و پلاک و واحد"},
  { id: 4, city: "تهران", state: "تهران", postCode: 1612390810237 ,address:"یه آدرس معمولی شامل خیابان و کوچه و پلاک و واحد"},
  { id: 5, city: "تهران", state: "تهران", postCode: 1230912371 ,address:"یه آدرس معمولی شامل خیابان و کوچه و پلاک و واحد"},
  { id: 6, city: "فردیس", state: "البرز", postCode: 91230718237 ,address:"یه آدرس معمولی شامل خیابان و کوچه و پلاک و واحد"},
  { id: 7, city: "ارومیه", state: "آذربایجان", postCode: 1298136481 ,address:"یه آدرس معمولی شامل خیابان و کوچه و پلاک و واحد"},
  { id: 8, city: "شیراز", state: "فارس", postCode: 21983197624 ,address:"یه آدرس معمولی شامل خیابان و کوچه و پلاک و واحد"},
  { id: 9, city: "دماوند", state: "تهران", postCode: 1290873197268,address:"یه آدرس معمولی شامل خیابان و کوچه و پلاک و واحد" },
];

export default function Addresses() {
  return (
    <div style={{ height: '90vh', width: "80%" }}>
      <TableRoot
        rows={rows}
        columns={columns}
        ppostCodeSize={5}
        rowsPerPpostCodeOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
