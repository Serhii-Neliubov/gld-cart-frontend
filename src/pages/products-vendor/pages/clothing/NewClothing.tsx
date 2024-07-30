import React from "react";
import ItemPublishPage from "@/components/item-published/ItemPublishPage.tsx";
import useCategoryRedirect from "@/hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import {PhotoAndVideoBlock} from "@/components/photo-video-block/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "@/pages/products-vendor/pages/clothing/stages/BasicInformation.tsx";
import {SpecificationInformation} from "@/pages/products-vendor/pages/clothing/stages/SpecificationInformation.tsx";
import {VendorProductComponentProps} from "@/models/IVendorProductComponentProps.ts";

export const NewClothing = ({setStage, formData, stage, setFormData}: VendorProductComponentProps) => {
  useCategoryRedirect("clothing", "/products-category-page", stage);

  return (
    <React.Fragment>
      {stage == 3 && <BasicInformation setStage={setStage} formData={formData} setFormData={setFormData}/>}
      {stage == 4 && <PhotoAndVideoBlock title='Clothing' subtitle='Photo and video' setStage={setStage} formData={formData} setFormData={setFormData}/>}
      {stage == 5 && <SpecificationInformation setStage={setStage} formData={formData} setFormData={setFormData}/>}
      {stage == 6 && <ItemPublishPage link='products' formData={formData} category="Clothing"/>}
    </React.Fragment>
  );
};
