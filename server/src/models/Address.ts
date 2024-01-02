import {Schema, Types} from "mongoose";

export interface IAddress
{
    id?: Types.ObjectId;
    recipients_name: string;
    street_address: string;
    city: string;
    state?: string;
    country: string;
    ZIP_code: string;
    phone_number: string;
}

export const addressSchema :Schema<IAddress> = new Schema({
    recipients_name: {
        type: String,
        required: true
    },
    street_address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String
    },
    country: {
        type: String,
        required: true
    },
    ZIP_code: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    }
});