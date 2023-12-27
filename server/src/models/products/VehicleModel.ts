import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IVehicle extends Document {
    image: string;
    title: string;
    price_day: string;
    price_week: string;
    price_month: string;
    advantage1: string;
    advantage2: string;
    advantage3: string;
    advantage4: string;
    advantage5: string;
    advantage6: string;
    taxes: string;
    total_price: string;
    air_bags: string;
    category: string;
    description: string;
    driver_choice: string;
    engine_capacity: string;
    fuel_type: string;
    item: string;
    manufacture_year: string;
    photos: string[];
    promo_video: string;
    rent_price: string;
    renting_packages: string;
    seat_capacity: string;
    specification: string;
    specification_details: string;
    specifications_details: {
        storage_bag_capacity: string;
    };
    subcategory: string;
    time: any;
    vehicle_condition: string;
    vehicle_number: string;
}

const VehicleSchema = new Schema<IVehicle>({
    image: { type: String, required: true },
    title: { type: String, required: true },
    price_day: { type: String, required: true },
    price_week: { type: String, required: true },
    price_month: { type: String, required: true },
    advantage1: { type: String, required: true },
    advantage2: { type: String, required: true },
    advantage3: { type: String, required: true },
    advantage4: { type: String, required: true },
    advantage5: { type: String, required: true },
    advantage6: { type: String, required: true },
    taxes: { type: String, required: true },
    total_price: { type: String, required: true },
    air_bags: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    driver_choice: { type: String, required: true },
    engine_capacity: { type: String, required: true },
    fuel_type: { type: String, required: true },
    item: { type: String, required: true },
    manufacture_year: { type: String, required: true },
    photos: [{ type: String }],
    promo_video: { type: String },
    rent_price: { type: String, required: true },
    renting_packages: { type: String, required: true },
    seat_capacity: { type: String, required: true },
    specification: { type: String, required: true },
    specification_details: { type: String, required: true },
    specifications_details: {
        storage_bag_capacity: { type: String, required: true },
    },
    subcategory: { type: String, required: true },
    time: { type: Schema.Types.Mixed },
    vehicle_condition: { type: String, required: true },
    vehicle_number: { type: String, required: true },
});

const VehicleModel: Model<IVehicle> = mongoose.model('vehicles', VehicleSchema) as Model<IVehicle>;

export default VehicleModel;
