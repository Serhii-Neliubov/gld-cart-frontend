import React from "react";
import useCategoryRedirect from "@/hooks/useCategoryRedirect.tsx";
import ItemPublishPage from "@/components/item-published/ItemPublishPage.tsx";
import {PhotoAndVideoBlock} from "../../components/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "./stages/BasicInformation.tsx";
import {SpecificationInformation} from "./stages/SpecificationInformation.tsx";
import {VendorProductComponentProps} from "@/utils/models/IVendorProductComponentProps.ts";

export const NewHandyman = ({setStage, formData, stage, setFormData}: VendorProductComponentProps) => {
  useCategoryRedirect("handyman", "/personal-services", stage);

  return (
    <React.Fragment>
      stage == 3 && <BasicInformation setFormData={setFormData} formData={formData}/>
      stage == 4 && <PhotoAndVideoBlock setFormData={setFormData} formData={formData}/>
      stage == 5 && <SpecificationInformation setFormData={setFormData} formData={formData}/>
      stage == 6 && <ItemPublishPage link='professional-services' formData={formData} category="Lawn Services" />
    </React.Fragment>
  );
};
