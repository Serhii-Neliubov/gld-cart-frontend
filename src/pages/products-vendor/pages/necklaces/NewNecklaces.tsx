import React from "react";
import ItemPublishPage from "@components/item-published/ItemPublishPage.tsx";
import useCategoryRedirect from "@hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import {PhotoAndVideoBlock} from "@components/photo-video-block/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "@pages/products-vendor/pages/necklaces/stages/BasicInformation.tsx";
import {SpecificationInformation} from "@pages/products-vendor/pages/necklaces/stages/SpecificationInformation.tsx";
import {VendorProductComponentProps} from "@models/IVendorProductComponentProps.ts";

export const NewNecklaces = ({setStage, formData, stage, setFormData}: VendorProductComponentProps) => {
  useCategoryRedirect("necklaces", "/products-category-page", stage);

  return (
    <React.Fragment>
      <React.Fragment>
        {stage == 3 && <BasicInformation setStage={setStage} formData={formData} setFormData={setFormData}/> }
        {stage == 4 && <PhotoAndVideoBlock title='Necklaces' subtitle='Photo and video' setStage={setStage} formData={formData} setFormData={setFormData}/> }
        {stage == 5 && <SpecificationInformation setStage={setStage} formData={formData} setFormData={setFormData}/> }
        {stage == 6 && <ItemPublishPage link='products' formData={formData} category="Necklaces"/> }
      </React.Fragment>
    </React.Fragment>
  );
};
