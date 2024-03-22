import React, { useState } from "react";
import ItemPublishPage from "@/components/item-published/ItemPublishPage.tsx";
import useCategoryRedirect from "@/hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import {PhotoAndVideoBlock} from "@/components/photo-video-block/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "@/viewes/products-vendor/pages/clothing/stages/BasicInformation.tsx";
import {SpecificationInformation} from "@/viewes/products-vendor/pages/clothing/stages/SpecificationInformation.tsx";
import {IVendorProductData} from "@/utils/models/IVendorProductData.ts";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";

export const NewClothing = () => {
  const [stage, setStage] = useState(3);
  const {category, subcategory, product} = useParams();
  const user = useSelector(userDataSelector);

  const [formData, setFormData] = useState<IVendorProductData>({
    title: "",
    description: "",
    attributes: {},
    images: [],
    price: 0,
    seller_id: user.id,
    stock: 0,
    category: category,
    subcategory: subcategory,
    product_name: product,
  });

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
