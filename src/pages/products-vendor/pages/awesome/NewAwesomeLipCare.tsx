import React from "react";
import ItemPublishPage from "@/components/item-published/ItemPublishPage.tsx";
import useCategoryRedirect from "@/hooks/useCategoryRedirect.tsx";
import {BasicInformation} from "./stages/BasicInformation.tsx";
import {SpecificationInformation} from "./stages/SpecificationInformation.tsx";
import {PhotoAndVideoBlock} from "@/components/photo-video-block/PhotoAndVideoBlock.tsx";
import {VendorProductComponentProps} from "models/IVendorProductComponentProps.ts";

export const NewAwesomeLipCare = ({setStage, formData, stage, setFormData}: VendorProductComponentProps) => {
  useCategoryRedirect("awesome", "/products-category-page", stage);

  return (
    <React.Fragment>
      {stage == 3 && <BasicInformation setStage={setStage} formData={formData} setFormData={setFormData}/>}
      {stage == 4 && <PhotoAndVideoBlock title='Awesome Lip Care' subtitle='Photo and video' setStage={setStage} formData={formData} setFormData={setFormData}/>}
      {stage == 5 && <SpecificationInformation setStage={setStage} formData={formData} setFormData={setFormData}/>}
      {stage == 6 && <ItemPublishPage link='products' formData={formData} category="Awesome Lip Care"/>}
    </React.Fragment>
  );
};
