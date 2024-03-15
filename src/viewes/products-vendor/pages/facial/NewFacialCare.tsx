import React, { useState } from "react";
import ItemPublishPage from "@/components/item-published/ItemPublishPage.tsx";
import useCategoryRedirect from "@/hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import {SpecificationInformation} from "@/viewes/products-vendor/pages/facial/stages/SpecificationInformation.tsx";
import {BasicInformation} from "@/viewes/products-vendor/pages/facial/stages/BasicInformation.tsx";
import {PhotoAndVideoBlock} from "@/components/photo-video-block/PhotoAndVideoBlock.tsx";
import {IVendorProductData} from "@/utils/models/IVendorProductData.ts";

export const NewFacialCare = () => {
  const [stage, setStage] = useState(3);

  const [formData, setFormData] = useState<IVendorProductData>({
    title: "",
    description: "",
    attributes: {},
    images: [],
    price: 0,
    category: "",
    subcategory: "",
    product_name: "",
  });

  useCategoryRedirect("facial", "/products-category-page", stage);

  return (
    <React.Fragment>
      <React.Fragment>
        {stage == 3 && <BasicInformation setStage={setStage} formData={formData} setFormData={setFormData}/> }
        {stage == 4 && <PhotoAndVideoBlock title='Facial Care' subtitle='Photo and video' setStage={setStage} formData={formData} setFormData={setFormData}/> }
        {stage == 5 && <SpecificationInformation setStage={setStage} formData={formData} setFormData={setFormData}/> }
        {stage == 6 && <ItemPublishPage link='products' formData={formData} category="Facial Care"/> }
      </React.Fragment>
    </React.Fragment>
  );
};
