import React, { useState } from "react";
import useCategoryRedirect from "@/hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import { IVendorProductData } from "@/utils/models/IVendorProductData.ts";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";

import {NewBeautyOfSkin} from "@/viewes/products-vendor/pages/beautyOfSkin/NewBeautyOfSkin.tsx";
import {NewMobileTablets} from "@/viewes/products-vendor/pages/mobileTablets/NewMobileTablets.tsx";
import {NewNecklaces} from "@/viewes/products-vendor/pages/necklaces/NewNecklaces.tsx";
import {NewClothing} from "@/viewes/products-vendor/pages/clothing/NewClothing.tsx";
import {NewBluetooth} from "@/viewes/products-vendor/pages/bluetooth/NewBluetooth.tsx";
import {NewFacialCare} from "@/viewes/products-vendor/pages/facial/NewFacialCare.tsx";
import {NewShoes} from "@/viewes/products-vendor/pages/shoes/NewShoes.tsx";
import {NewDiscoverSkincare} from "@/viewes/products-vendor/pages/discover/NewDiscoverSkincare.tsx";
import {NewHeadphones} from "@/viewes/products-vendor/pages/headphones/NewHeadphones.tsx";
import {NewBracelets} from "@/viewes/products-vendor/pages/braceletes/NewBracelets.tsx";
import {NewEarrings} from "@/viewes/products-vendor/pages/earrings/NewEarrings.tsx";
import {NewAwesomeLipCare} from "@/viewes/products-vendor/pages/awesome/NewAwesomeLipCare.tsx";
import {NewBags} from "@/viewes/products-vendor/pages/bags/NewBags.tsx";
import {NewCpu} from "@/viewes/products-vendor/pages/cpu/NewCpu.tsx";
import {NewSmartWatch} from "@/viewes/products-vendor/pages/smartWatch/NewSmartWatch.tsx";

const CATEGORIES = {
  BEAUTY: 'beauty',
  BAGS: 'bags',
  AWESOME: 'awesome',
  MOBILE_TABLETS: 'mobileTablets',
  NECKLACES: 'necklaces',
  CLOTHING: 'clothing',
  BLUETOOTH: 'bluetooth',
  FACIAL_LIP_CARE: 'facial',
  SHOES: 'shoes',
  CPU: 'cpu',
  DISCOVER_SKINCARE: 'discover',
  HEADPHONES: 'headphones',
  BRACELETS: 'bracelets',
  SMART_WATCH: 'smartWatch',
  EARRINGS: 'earrings'
}

const COMPONENTS = {
  [CATEGORIES.BEAUTY]: NewBeautyOfSkin,
  [CATEGORIES.BAGS]: NewBags,
  [CATEGORIES.AWESOME]: NewAwesomeLipCare,
  [CATEGORIES.MOBILE_TABLETS]: NewMobileTablets,
  [CATEGORIES.NECKLACES]: NewNecklaces,
  [CATEGORIES.CLOTHING]: NewClothing,
  [CATEGORIES.BLUETOOTH]: NewBluetooth,
  [CATEGORIES.FACIAL_LIP_CARE]: NewFacialCare,
  [CATEGORIES.SHOES]: NewShoes,
  [CATEGORIES.CPU]: NewCpu,
  [CATEGORIES.DISCOVER_SKINCARE]: NewDiscoverSkincare,
  [CATEGORIES.HEADPHONES]: NewHeadphones,
  [CATEGORIES.BRACELETS]: NewBracelets,
  [CATEGORIES.SMART_WATCH]: NewSmartWatch,
  [CATEGORIES.EARRINGS]: NewEarrings
}

export const ProductsFormVendor = () => {
  const [stage, setStage] = useState(3);

  const {category, subcategory, product} = useParams();
  useCategoryRedirect(category as string, "/products-category-page", stage);

  const user = useSelector(userDataSelector);

  const [formData, setFormData] = useState<IVendorProductData>({
    title: "",
    description: "",
    attributes: {},
    images: [],
    price: 0,
    stock: 0,
    category: category,
    subcategory: subcategory,
    product_name: product,
    seller_id: user.id,
  });


  return (
    <React.Fragment>
        {React.createElement(COMPONENTS[category as string], { setStage, stage, formData, setFormData })}
    </React.Fragment>
  );
};
