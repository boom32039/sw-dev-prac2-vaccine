import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";


type BookingState = {
	bookingItem: BookingItem | null;
};

const initialState: BookingState = { bookingItem: null };
export const bookingSlice = createSlice({
	name: "booking",
	initialState,
	reducers: {
		addBooking: (state, action: PayloadAction<BookingItem>) => {
			state.bookingItem = action.payload;
			console.log(state.bookingItem)
		},
		removeBooking: (state, action: PayloadAction<BookingItem>) => {
			state.bookingItem = null;
		}
	}
});

export const {addBooking, removeBooking} = bookingSlice.actions
export default bookingSlice.reducer