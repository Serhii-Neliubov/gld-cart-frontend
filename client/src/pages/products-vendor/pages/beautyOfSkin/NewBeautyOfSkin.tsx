import React, { useState } from "react";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import { BasicInformation } from "./stages/BasicInformation.tsx";
import {SpecificationInformation} from "./stages/SpecificationInformation.tsx";
import {PhotoAndVideoBlock} from "../../components/PhotoAndVideoBlock.tsx";
import {IVendorProductData} from "../../../../models/IVendorProductData.ts";

export const NewBeautyOfSkin = () => {
  const [stage, setStage] = useState(3);
  const [formData, setFormData] = useState<IVendorProductData>({
    title: '',
    description: '',
    attributes: {},
    images: [],
    category: '',
    subcategory: '',
    product_name: '',
  });

  useCategoryRedirect("beauty", "/products-category-page", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Beauty Of Skin PRODUCT Form"
          subtitle="Basic information"
          stage={stage - 1}
        >
          {stage == 3 && (
            <BasicInformation formData={formData} setFormData={setFormData}/>
          )}
          {stage == 4 && (
            <PhotoAndVideoBlock formData={formData} setFormData={setFormData}/>
          )}
          {stage == 5 && (
            <SpecificationInformation formData={formData} setFormData={setFormData}/>
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage link='products' formData={formData} category="Beauty Of Skin" />}
    </React.Fragment>
  );
};
