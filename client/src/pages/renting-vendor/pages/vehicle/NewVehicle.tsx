import React, { useState } from "react";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";
import {PhotoAndVideoBlock} from "../../components/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "./stages/BasicInformation.tsx";
import {SpecificationInformation} from "./stages/SpecificationInformation.tsx";

export const NewVehicle = () => {
  const [stage, setStage] = useState(3);

  useCategoryRedirect("vehicles", "/renting-category-page", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Vehicle Renting Form"
          subtitle="Basic information"
          stage={stage - 1}
        >
          {stage == 3 && (
            <BasicInformation />
          )}
          {stage == 4 && (
            <PhotoAndVideoBlock />
          )}
          {stage == 5 && (
            <SpecificationInformation />
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage category="Vehicle" />}
    </React.Fragment>
  );
};
