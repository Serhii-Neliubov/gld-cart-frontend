import React, { useState } from "react";
import useCategoryRedirect from "hooks/useCategoryRedirect.tsx";
import ItemPublishPage from "components/item-published/ItemPublishPage.tsx";
import {BasicInformation} from "./stages/BasicInformation.tsx";
import {SpecificationInformation} from "./stages/SpecificationInformation.tsx";
import {IVendorProductData} from "models/IVendorProductData.tsx";
import {useSelector} from "react-redux";
import {userDataSelector} from "store/slices/userDataSlice.ts";
import {PhotoAndVideoBlock} from "components/photo-video-block/PhotoAndVideoBlock.tsx";
import {useParams} from "react-router-dom";

export const NewVehicle = () => {
  const [stage, setStage] = useState(3);
  const user = useSelector(userDataSelector);
  const {category, subcategory, product} = useParams();
  const [formData, setFormData] = useState<IVendorProductData>({
    title: '',
    seller_id: user.id,
    price: 0,
    description: '',
    attributes: {},
    images: [],
    category: category,
    subcategory: subcategory,
    renting_name: product,
  });

  useCategoryRedirect("vehicles", "/renting-category-page", stage);

  return (
    <React.Fragment>
      <React.Fragment>
        {stage == 3 && <BasicInformation setStage={setStage} formData={formData} setFormData={setFormData}/> }
        {stage == 4 && <PhotoAndVideoBlock setStage={setStage} title='Vehicle' subtitle='Photo and video' formData={formData} setFormData={setFormData}/> }
        {stage == 5 && <SpecificationInformation setStage={setStage} formData={formData} setFormData={setFormData}/> }
        {stage == 6 && <ItemPublishPage link='renting' formData={formData} category="House"/> }
      </React.Fragment>
    </React.Fragment>
  );
};
