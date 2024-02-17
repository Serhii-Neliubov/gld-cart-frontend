import React, { useState } from "react";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";
import {SpecificationInformation} from "./stages/SpecificationInformation.tsx";
import {BasicInformation} from "./stages/BasicInformation.tsx";
import {PhotoAndVideoBlock} from "../../components/PhotoAndVideoBlock.tsx";
import {IVendorProductData} from "../../../../utils/models/IVendorProductData.tsx";

export const NewRepairing = () => {
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

  useCategoryRedirect("repairing", "/personal-services", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Repairing SERVICES Form"
          subtitle="Basic information"
          stage={stage - 1}
        >
          {stage == 3 && (
            <BasicInformation formData={formData} setFormData={setFormData} />
          )}
          {stage == 4 && (
            <PhotoAndVideoBlock formData={formData} setFormData={setFormData}/>
          )}
          {stage == 5 && (
            <SpecificationInformation formData={formData} setFormData={setFormData}/>
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage link='professional-services' formData={formData} category="Electronics" />}
    </React.Fragment>
  );
};
