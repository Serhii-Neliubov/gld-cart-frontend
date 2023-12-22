import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


type VehicleKeys = keyof IVehicle;

interface IVehicle {
  category: string;
  subcategory: string;
  item: string;
  title: string;
  description: string;
  driver_choice: string;
  renting_packages: string;
  rent_price: string;
  time: string;
  photos?: string[];
  promo_video?: string;
  manufacture_year: string;
  vehicle_number: string;
  vehicle_condition: string;
  specification: string;
  specifications_details: string;
  fuel_type: string;
  engine_capacity: string;
  seat_capacity: string;
  storage_bag_capacity: string;
  air_bags: string;
}


interface vehiclesItemSlice {
  vehicle: IVehicle;
}

const initialState: vehiclesItemSlice = {
  vehicle: {
    category: "Vehicles",
    subcategory: "",
    item: "",
    title: "",
    description: "",
    driver_choice: "",
    renting_packages: "",
    rent_price: "",
    time: "",
    photos: [],
    promo_video: "",
    manufacture_year: "",
    vehicle_number: "",
    vehicle_condition: "",
    specification: "",
    specifications_details: "",
    fuel_type: "",
    engine_capacity: "",
    seat_capacity: "",
    storage_bag_capacity: "",
    air_bags: "",

  },
};

// ... (previous imports and types)

export const vehiclesItemSlice = createSlice({
  name: "vehicle item",
  initialState,
  reducers: {
    updateVehicle: (
        state,
        action: PayloadAction<{
          key: VehicleKeys | VehicleKeys[];
          value: string | string[];
        }>
    ) => {
      const { key, value } = action.payload;

      // Helper function for type assertion
      const setValue = (state.vehicle as any) as (key: VehicleKeys, value: string | string[]) => void;

      // Use the helper function to set the value
      if (Array.isArray(key)) {
        key.forEach((k, index) => setValue(k, value[index]));
      } else {
        setValue(key, value);
      }
    },
  },
});


// Action creators are generated for each case reducer function
export const { updateVehicle } = vehiclesItemSlice.actions;

export const vehicleData = (state: RootState) => state.vehicleDataSlice.vehicle;

export default vehiclesItemSlice.reducer;
