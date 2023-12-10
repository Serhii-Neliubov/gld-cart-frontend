import VehicleModel, {Vehicle} from "../models/products/VehicleModel";

class VehicleService {
    async createVehicle(vehicleData: Vehicle): Promise<Vehicle> {
        return await VehicleModel.create(vehicleData);
    }

    async getVehicleById(id: string): Promise<Vehicle | null> {
        return VehicleModel.findById(id);
    }

    async updateVehicle(id: string, updatedVehicleData: Partial<Vehicle>): Promise<Vehicle | null> {
        return VehicleModel.findByIdAndUpdate(id, updatedVehicleData, {new: true});
    }

    async deleteVehicle(id: string) {
        return VehicleModel.findByIdAndDelete(id);
    }
}

export default new VehicleService();