import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addVenderFormData: {
    companyName: "",
    vendorEmail: "",
    Address: "",
    vendorDisplayName: "",
    vendorMobileNo: "",

    accountNo: "",
    bankName: "",
    remarks: "",
    IFSCCode: "",
    branch: "",

    panNo: "",
    paymentTerms: "",
    fileData: "",
  },
};

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    addVenderFormOnChange: (state, action) => {
      state[action.payload.keyName] = action.payload.value;
    },
  },
});

export const adminReducer = adminSlice.reducer;
export const { addVenderFormOnChange } = adminSlice.actions;
