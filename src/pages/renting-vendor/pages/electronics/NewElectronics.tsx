import React, { useState } from "react";
import useCategoryRedirect from "hooks/useCategoryRedirect.tsx";
import ItemPublishPage from "components/item-published/ItemPublishPage.tsx";
import {BasicInformation} from "./stages/BasicInformation.tsx";
import {SpecificationInformation} from "./stages/SpecificationInformation.tsx";
import {IVendorProductData} from "models/IVendorProductData.tsx";
import {useParams} from "react-router-dom";
import {PhotoAndVideoBlock} from "components/photo-video-block/PhotoAndVideoBlock.tsx";
import {useSelector} from "react-redux";
import {userDataSelector} from "store/slices/userDataSlice.ts";

export const NewElectronics = () => {
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
    category: category,
    subcategory: subcategory,
    renting_name: product,
  });

  useCategoryRedirect("electronics", "/renting-category-page", stage);

  return (
    <React.Fragment>
      <React.Fragment>
        {stage == 3 && <BasicInformation setStage={setStage} formData={formData} setFormData={setFormData}/> }
        {stage == 4 && <PhotoAndVideoBlock title='Electronics' subtitle='Photo and video' setStage={setStage} formData={formData} setFormData={setFormData}/> }
        {stage == 5 && <SpecificationInformation setStage={setStage} formData={formData} setFormData={setFormData}/> }
        {stage == 6 && <ItemPublishPage link='renting' formData={formData} category="Smartwatch"/> }
      </React.Fragment>
    </React.Fragment>
  );
};
