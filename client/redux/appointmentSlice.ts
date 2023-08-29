import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Hospital {
  address: string;
  contact: string;
  name: string;
  type: "Multispeciality Hospital" | "Private Clinic" | "Government Hospital";
}

interface Appointment {
  date: string;
  time: string;
}

interface AppointmentState {
  appointment: {
    hospital: Hospital | null;
    appointment: Appointment | null;
    paymentPrice: string | null;
    selectedMethod: "online" | "atHospital" | null | string;
    status: "pending" | "confirmed" | "rescheduled";
  } | null;
  isAppointmentScheduled: boolean;
}

const initialState: AppointmentState = {
  appointment: null,
  isAppointmentScheduled: false,
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setAppointment: (
      state,
      action: PayloadAction<AppointmentState["appointment"]>
    ) => {
      state.appointment = action.payload;
      state.isAppointmentScheduled = true;
    },
  },
});
export const { setAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
