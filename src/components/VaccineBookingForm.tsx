"use client";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { BookingItem } from "../../interfaces";
import { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

export default function VaccineBookingForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<BookingItem>({
    firstName: "",
    lastName: "",
    citizenId: "",
    hospital: "",
    date: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(addBooking(formData));
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (value: Dayjs | null) =>
  setFormData({
    ...formData,
    date: value ? value.format("DD/MM/YYYY") : "",
  })

  return (
    <form
      className="my-5 flex flex-col bg-slate-100 rounded-lg  px-10 py-5 space-y-5 justify-center"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          name="firstName"
          label="First Name"
          fullWidth={true}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          name="lastName"
          label="Last Name"
          fullWidth={true}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          name="citizenId"
          label="Citizen Id"
          fullWidth={true}
          onChange={handleChange}
        />
      </div>

      <FormControl>
        <InputLabel>Hospital</InputLabel>
        <Select
          name="hospital"
          variant="outlined"
          label="Hospital"
          value={formData.hospital}
          onChange={handleChange}
        >
          <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
          <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat Hospital">Thammasat Hospital</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-transparent" onChange={handleDateChange}/>
      </LocalizationProvider>
      <Button type="submit">Book</Button>
    </form>
  );
}