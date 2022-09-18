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
  { field: "productName", headerName: "نام کالا", width: 130 },
  { field: "count", headerName: "تعداد", width: 130 },
  {
    field: "invoiceNumber",
    headerName: "شماره فاکتور",
    type: "number",
    width: 140,
  },
  {
    field: "price",
    headerName: "قیمت",
    type: "number",
    width: 230,
  },
];

const rows = [
    { id: 1, count: 12, productName: "کالای خراب", invoiceNumber: 351231233512 ,price:123345667},
    { id: 2, count: 12, productName: "کالای خراب", invoiceNumber: 4212321312 ,price:1249782613},
    { id: 3, count: 12, productName: "کالای خراب", invoiceNumber: 459982376123 ,price:1249782613},
    { id: 4, count: 12, productName: "کالای خراب", invoiceNumber: 1612390810237 ,price:1249782613},
    { id: 5, count: 12, productName: "کالای خراب", invoiceNumber: 1230912371 ,price:1249782613},
    { id: 6, count: 12, productName: "کالای خراب", invoiceNumber: 91230718237 ,price:1249782613},
    { id: 7, count: 12, productName: "کالای خراب", invoiceNumber: 1298136481 ,price:1249782613},
    { id: 8, count: 12, productName: "کالای خراب", invoiceNumber: 21983197624 ,price:1249782613},
    { id: 9, count: 12, productName: "کالای خراب", invoiceNumber: 1290873197268,price:1249782613 },
  ];

const Orders =() =>{
    return(
        <div style={{ height: '90vh', width: "80%" }}>
        <TableRoot
          rows={rows}
          columns={columns}
          ppostCodeSize={5}
          rowsPerPpostCodeOptions={[5]}
          checkboxSelection
        />
      </div>
    )
}

export default Orders