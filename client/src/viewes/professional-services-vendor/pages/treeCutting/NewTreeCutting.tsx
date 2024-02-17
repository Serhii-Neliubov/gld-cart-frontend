import React, { useState } from "react";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";
import {PhotoAndVideoBlock} from "../../components/PhotoAndVideoBlock.tsx";
import {SpecificationInformation} from "./stages/SpecificationInformation.tsx";
import {BasicInformation} from "./stages/BasicInformation.tsx";
import {IVendorProductData} from "../../../../utils/models/IVendorProductData.tsx";

export const NewTreeCutting = () => {
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

  useCategoryRedirect("treeCutting", "/personal-services", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Tree Cutting SERVICES Form"
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
      {stage == 6 && <ItemPublishPage link='professional-services' formData={formData} category="Tree Cutting" />}
    </React.Fragment>
  );
};
