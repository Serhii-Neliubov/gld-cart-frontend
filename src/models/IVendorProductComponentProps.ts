import {Dispatch, SetStateAction} from "react";
import {IVendorProductData} from "@/utils/models/IVendorProductData.ts";

export interface VendorProductComponentProps {
  setStage: Dispatch<SetStateAction<number>>;
  formData: IVendorProductData;
  stage: number;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
}