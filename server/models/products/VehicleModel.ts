import mongoose, {Schema, model, Document, Model} from 'mongoose';

// Define the interface for the vehicle
export interface Vehicle extends Document {
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
    title: string;
    vehicle_condition: string;
    vehicle_number: string;
}

const VehicleSchema = new Schema<Vehicle>({
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
    title: { type: String, required: true },
    vehicle_condition: { type: String, required: true },
    vehicle_number: { type: String, required: true },
});

// Create a Mongoose model for the vehicle
const VehicleModel: Model<Vehicle> = mongoose.model("vehicles", VehicleSchema) as Model<Vehicle>;

export default VehicleModel;
