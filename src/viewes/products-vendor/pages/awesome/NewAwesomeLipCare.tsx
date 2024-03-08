import React, { useState } from "react";
import ItemPublishPage from "@/components/item-published/ItemPublishPage.tsx";
import useCategoryRedirect from "@/hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import { BasicInformation } from "./stages/BasicInformation.tsx";
import { SpecificationInformation } from "./stages/SpecificationInformation.tsx";
import { PhotoAndVideoBlock } from "@/components/photo-video-block/PhotoAndVideoBlock.tsx";
import { IVendorProductData } from "@/utils/models/IVendorProductData.ts";

export const NewAwesomeLipCare = () => {
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

  console.log(formData, "formData")

  useCategoryRedirect("awesome", "/products-category-page", stage);

  return (
    <React.Fragment>
        {stage == 3 && <BasicInformation setStage={setStage} formData={formData} setFormData={setFormData}/>}
        {stage == 4 && <PhotoAndVideoBlock setStage={setStage} formData={formData} setFormData={setFormData}/>}
        {stage == 5 && <SpecificationInformation setStage={setStage} formData={formData} setFormData={setFormData}/>}
        {stage == 6 && <ItemPublishPage link='products' formData={formData} category="Awesome Lip Care"/>}
    </React.Fragment>
  );
};
