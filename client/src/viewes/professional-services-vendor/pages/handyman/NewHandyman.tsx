import React, { useState } from "react";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";
import {IVendorProductData} from "../../../../utils/models/IVendorProductData.tsx";
import {PhotoAndVideoBlock} from "../../components/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "./stages/BasicInformation.tsx";
import {SpecificationInformation} from "./stages/SpecificationInformation.tsx";

export const NewHandyman = () => {
  const [stage, setStage] = useState(3);
  const [formData, setFormData] = useState<IVendorProductData>({
    title: '',
    description: '',
    attributes: {},
    images: [],
    category: '',
    subcategory: '',
    service_name: '',
  });

  useCategoryRedirect("handyman", "/personal-services", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Handyman SERVICES Form"
          subtitle="Basic information"
          stage={stage - 1}
        >
          {stage == 3 && (
            <BasicInformation setFormData={setFormData} formData={formData}/>
          )}
          {stage == 4 && (
            <PhotoAndVideoBlock setFormData={setFormData} formData={formData}/>
          )}
          {stage == 5 && (
            <SpecificationInformation setFormData={setFormData} formData={formData}/>
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage link='professional-services' formData={formData} category="Lawn Services" />}
    </React.Fragment>
  );
};
