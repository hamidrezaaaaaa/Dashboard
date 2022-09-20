import { Card, CardContent, CardHeader, Grid, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import React from "react";

const TableRoot = styled(DataGrid)`
  .MuiTablePagination-root {
    direction: ltr;
  }
`;

const AddIcon = styled(Add)`
  margin-left: 7px !important;
`;

const AmountRoot = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 8px;
`;

const columns = [
  { field: "id", headerName: "ردیف", width: 70 },
  { field: "transactionDate", headerName: " تاریخ تراکنش", width: 130 },
  { field: "transactionAmount", headerName: "مبلغ تراکنش", width: 130 },
  {
    field: "invoiceNumber",
    headerName: "شماره فاکتور",
    type: "number",
    width: 140,
  },
  {
    field: "code",
    headerName: "کد ‍‍پیگیری",
    type: "number",
    width: 140,
  },
  {
    field: "status",
    headerName: "وضعیت",
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    transactionAmount: 1200000,
    transactionDate: "1401/01/23 ",
    invoiceNumber: 351231233512,
    status: "   ناموفق ",
    code: 321,
  },
  {
    id: 2,
    transactionAmount: 1200000,
    transactionDate: "1401/01/23 ",
    invoiceNumber: 4212321312,
    status: "موفق",
    code: 321,
  },
  {
    id: 3,
    transactionAmount: 1200000,
    transactionDate: "1401/01/23 ",
    invoiceNumber: 459982376123,
    status: "نامشخص",
    code: 321,
  },
  {
    id: 4,
    transactionAmount: 1200000,
    transactionDate: "1401/01/23 ",
    invoiceNumber: 1612390810237,
    status: "موفق",
    code: 321,
  },
  {
    id: 5,
    transactionAmount: 1200000,
    transactionDate: "1401/01/23 ",
    invoiceNumber: 1230912371,
    status: "موفق",
    code: 321,
  },
  {
    id: 6,
    transactionAmount: 1200000,
    transactionDate: "1401/01/23 ",
    invoiceNumber: 91230718237,
    status: "نامشخص",
    code: 321,
  },
  {
    id: 7,
    transactionAmount: 1200000,
    transactionDate: "1401/01/23 ",
    invoiceNumber: 1298136481,
    status: "مفق",
    code: 321,
  },
  {
    id: 8,
    transactionAmount: 1200000,
    transactionDate: "1401/01/23 ",
    invoiceNumber: 21983197624,
    status: "موفق",
    code: 321,
  },
  {
    id: 9,
    transactionAmount: 1200000,
    transactionDate: "1401/01/23 ",
    invoiceNumber: 1290873197268,
    status: "موفق",
    code: 321,
  },
];

const Financial = () => {
  return (
    <Grid container spacing={4} width="80%">
      <Grid item xs={12} sm={6}>
        <Card>
          <CardHeader title="موجودی حساب شما" />
          <CardContent>
            <AmountRoot>
              <Button variant="contained" startIcon={<AddIcon />}>
                اضافه کردن
              </Button>
              <Button variant="outlined" sx={{width:'50%'}}>1000000 ریال</Button>
            </AmountRoot>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardHeader title="مجموع خرید های انجام شده از سایت" />
          <CardContent>
           
            <Button variant="outlined" color="error" sx={{width:'100%'}}>
              260000000ریال
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="سوابق مالی" />
          <CardContent sx={{ height: "50vh" }}>
            <TableRoot
              rows={rows}
              columns={columns}
              ppostCodeSize={5}
              rowsPerPpostCodeOptions={[5]}
              checkboxSelection
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Financial;
