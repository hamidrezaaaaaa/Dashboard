import React ,{useState} from "react";
import styled from "styled-components";
import { Card, CardHeader, CardContent, Grid, TextField ,FormControl,InputLabel,MenuItem,Button} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';


const CustomTextField = styled(TextField)`
  label {
    left: auto;
    right: auto;
    transform-origin: top right;
    text-align: right;
  }
`;

const Account = () => {

  const [sex, setSex] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSex(event.target.value );
  };
  return (
    <Card dir="rtl" sx={{ width: "80%" }}>
      <CardHeader title="مشخصات فردی" />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="نام"
              variant="standard"
              dir="rtl"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="نام خانوادگی"
              variant="standard"
              dir="rtl"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CustomTextField
              label=" شماره تلفن"
              variant="standard"
              dir="rtl"
              fullWidth
              type="tel"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sex}
                label="جنسیت"
                onChange={handleChange}
              >
                <MenuItem value={1}>مرد</MenuItem>
                <MenuItem value={2}>زن</MenuItem>
                <MenuItem value={3}>عدم تمایل به انتخاب</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <CustomTextField
              label="ایمیل"
              variant="standard"
              dir="rtl"
              fullWidth
              type="email"
            />
          </Grid>

          <Grid item xs={12}>
          <Button fullWidth variant="contained">ثبت</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Account;
