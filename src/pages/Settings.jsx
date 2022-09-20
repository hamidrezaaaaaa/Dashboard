import React from "react";
import {
  TextField,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button,
} from "@mui/material";
import styled from "styled-components";

const CustomTextField = styled(TextField)`
  label {
    left: auto;
    right: auto;
    transform-origin: top right;
    text-align: right;
  }
`;

const Settings = () => {
  return (
    <Card dir="rtl" sx={{ width: "80%" }}>
      <CardHeader title=" تغییر رمز کاربری" />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <CustomTextField
              label="رمز قبلی"
              variant="standard"
              dir="rtl"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              label="رمز جدید"
              variant="standard"
              dir="rtl"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              label="تکرار رمز جدید"
              variant="standard"
              dir="rtl"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth variant="contained">
              تغییر رمز
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Settings;
