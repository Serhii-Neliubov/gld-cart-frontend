import React from "react";
import ItemPublishPage from "@components/item-published/ItemPublishPage.tsx";
import useCategoryRedirect from "@hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import {PhotoAndVideoBlock} from "@components/photo-video-block/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "@pages/products-vendor/pages/bags/stages/BasicInformation.tsx";
import {SpecificationInformation} from "@pages/products-vendor/pages/bags/stages/SpecificationInformation.tsx";
import {VendorProductComponentProps} from "@models/IVendorProductComponentProps.ts";

export const NewBags = ({setStage, formData, stage, setFormData}: VendorProductComponentProps) => {
  useCategoryRedirect("bags", "/products-category-page", stage);

  return (
    <React.Fragment>
      {stage == 3 && <BasicInformation setStage={setStage} formData={formData} setFormData={setFormData} /> }
      {stage == 4 && <PhotoAndVideoBlock setStage={setStage} title='Bags' subtitle='Photo and video' setFormData={setFormData} formData={formData}/> }
      {stage == 5 && <SpecificationInformation setStage={setStage} formData={formData} setFormData={setFormData} /> }
      {stage == 6 && <ItemPublishPage link='products' category="Bags"  formData={formData}/> }
    </React.Fragment>
  );
};
