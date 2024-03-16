import React, { useState } from "react";
import ItemPublishPage from "@/components/item-published/ItemPublishPage.tsx";
import useCategoryRedirect from "@/hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import {PhotoAndVideoBlock} from "@/components/photo-video-block/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "@/viewes/products-vendor/pages/bags/stages/BasicInformation.tsx";
import {IVendorProductData} from "@/utils/models/IVendorProductData.ts";
import {SpecificationInformation} from "@/viewes/products-vendor/pages/bags/stages/SpecificationInformation.tsx";
import {useParams} from "react-router-dom";

export const NewBags = () => {
  const [stage, setStage] = useState(3);
  const {category, subcategory, product} = useParams();

  const [formData, setFormData] = useState<IVendorProductData>({
    title: "",
    description: "",
    attributes: {},
    images: [],
    price: 0,
    stock: 0,
    category: category,
    subcategory: subcategory,
    product_name: product,
  });

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
