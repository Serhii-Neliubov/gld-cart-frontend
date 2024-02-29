import React, { useState } from "react";
import { Layout } from "@/components/Vendor/Layout.tsx";
import ItemPublishPage from "@/components/item-published/ItemPublishPage.tsx";
import useCategoryRedirect from "@/hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import {PhotoAndVideoBlock} from "@/components/photo-video-block/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "@/viewes/products-vendor/pages/braceletes/stages/BasicInformation.tsx";
import {SpecificationInformation} from "@/viewes/products-vendor/pages/braceletes/stages/SpecificationInformation.tsx";
import {IVendorProductData} from "@/utils/models/IVendorProductData.ts";

export const NewBracelets = () => {
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

  useCategoryRedirect("bracelets", "/products-category-page", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Bracelets PRODUCT Form"
          subtitle="Basic information"
          stage={stage - 1}
        >
          {stage == 3 && (
            <BasicInformation />
          )}
          {stage == 4 && (
            <PhotoAndVideoBlock setFormData={setFormData} formData={formData}/>
          )}
          {stage == 5 && (
            <SpecificationInformation />
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage formData={formData} link='products' category="Bracelets" />}
    </React.Fragment>
  );
};
