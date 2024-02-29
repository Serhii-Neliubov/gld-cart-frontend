import React, { useState } from "react";
import { Layout } from "@/components/Vendor/Layout.tsx";
import ItemPublishPage from "@/components/item-published/ItemPublishPage.tsx";
import useCategoryRedirect from "@/hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import {PhotoAndVideoBlock} from "@/components/photo-video-block/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "@/viewes/products-vendor/pages/earrings/stages/BasicInformation.tsx";
import {IVendorProductData} from "@/utils/models/IVendorProductData.ts";
import {SpecificationInformation} from "@/viewes/products-vendor/pages/earrings/stages/SpecificationInformation.tsx";

export const NewEarrings = () => {
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

  useCategoryRedirect("earrings", "/products-category-page", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Earrings PRODUCT Form"
          subtitle="Basic information"
          stage={stage - 1}
        >
          {stage == 3 && (
            <BasicInformation />
          )}
          {stage == 4 && (
            <PhotoAndVideoBlock formData={formData} setFormData={setFormData} />
          )}
          {stage == 5 && (
            <SpecificationInformation />
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage formData={formData} link='products' category="Earrings" />}
    </React.Fragment>
  );
};
