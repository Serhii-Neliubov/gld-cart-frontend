import React from "react";
import useCategoryRedirect from "@/hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "@/components/item-published/ItemPublishPage.tsx";
import {SpecificationInformation} from "./stages/SpecificationInformation.tsx";
import {BasicInformation} from "./stages/BasicInformation.tsx";
import {PhotoAndVideoBlock} from "../../components/PhotoAndVideoBlock.tsx";
import {VendorProductComponentProps} from "@/utils/models/IVendorProductComponentProps.ts";

export const NewRepairing = ({setStage, formData, stage, setFormData}: VendorProductComponentProps) => {
  useCategoryRedirect("repairing", "/personal-services", stage);

  return (
    <React.Fragment>
      stage == 3 && <BasicInformation formData={formData} setFormData={setFormData} />
      stage == 4 && <PhotoAndVideoBlock formData={formData} setFormData={setFormData}/>
      stage == 5 && <SpecificationInformation formData={formData} setFormData={setFormData}/>
      stage == 6 && <ItemPublishPage link='professional-services' formData={formData} category="Electronics" />
    </React.Fragment>
  );
};
