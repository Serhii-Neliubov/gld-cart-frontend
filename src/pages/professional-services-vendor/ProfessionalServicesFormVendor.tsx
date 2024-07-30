import React, {useState} from "react";
import useCategoryRedirect from "@/hooks/useCategoryRedirect.tsx";
import {IVendorProductData} from "@/models/IVendorProductData.tsx";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";

import {NewCleaning} from "@/pages/professional-services-vendor/pages/cleaning/NewCleaning.tsx";
import {NewRepairing} from "@/pages/professional-services-vendor/pages/repairing/NewRepairing.tsx";
import {NewGardening} from "@/pages/professional-services-vendor/pages/gardening/NewGardening.tsx";
import {NewTreeCutting} from "@/pages/professional-services-vendor/pages/treeCutting/NewTreeCutting.tsx";
import {NewLawnServices} from "@/pages/professional-services-vendor/pages/lawnServices/NewLawnServices.tsx";
import {NewHandyman} from "@/pages/professional-services-vendor/pages/handyman/NewHandyman.tsx";
import {NewSnowRemoval} from "@/pages/professional-services-vendor/pages/snowRemoval/NewSnowRemoval.tsx";
import {NewPestControl} from "@/pages/professional-services-vendor/pages/pestControl/NewPestControl.tsx";
import {NewElectrical} from "@/pages/professional-services-vendor/pages/electrical/NewElectrical.tsx";
import {useParams} from "react-router-dom";

const CATEGORIES = {
  CLEANING: 'cleaning',
  REPAIRING: 'repairing',
  GARDENING: 'gardening',
  TREE_CUTTING: 'treeCutting',
  LAWN_SERVICES: 'lawnServices',
  HANDYMAN: 'handyman',
  SNOW_REMOVAL: 'snowRemoval',
  PEST_CONTROL: 'pestControl',
  ELECTRICAL: 'electrical',
}

const COMPONENTS = {
  [CATEGORIES.CLEANING]: NewCleaning,
  [CATEGORIES.REPAIRING]: NewRepairing,
  [CATEGORIES.GARDENING]: NewGardening,
  [CATEGORIES.TREE_CUTTING]: NewTreeCutting,
  [CATEGORIES.LAWN_SERVICES]: NewLawnServices,
  [CATEGORIES.HANDYMAN]: NewHandyman,
  [CATEGORIES.SNOW_REMOVAL]: NewSnowRemoval,
  [CATEGORIES.PEST_CONTROL]: NewPestControl,
  [CATEGORIES.ELECTRICAL]: NewElectrical,
}

export const ProfessionalServicesFormVendor = () => {
  const [stage, setStage] = useState(3);
  const user = useSelector(userDataSelector);
  const {category, subcategory, service} = useParams();
  const [formData, setFormData] = useState<IVendorProductData>({
    title: '',
    description: '',
    attributes: {},
    images: [],
    category: category,
    subcategory: subcategory,
    service_name: service,
    price: 0,
    seller_id: user.id,
  });

  useCategoryRedirect(category as string, "/professional-services", stage);

  return (
    React.createElement(COMPONENTS[category as string], { setStage, stage, formData, setFormData })
  );
};
