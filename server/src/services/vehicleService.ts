import VehicleModel, {Vehicle} from "../models/products/VehicleModel";
import {Logger} from "../util/logger";

class VehicleService {
    private logger: Logger;
    constructor() {
        this.logger = new Logger();
    }
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

    async getAllVehicles() {
        return VehicleModel.find();
    }
}

export default new VehicleService();