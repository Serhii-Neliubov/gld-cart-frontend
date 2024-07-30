import React, {useState} from "react";
import useCategoryRedirect from "@/hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import {IVendorProductData} from "@/models/IVendorProductData.ts";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";

import {NewBeautyOfSkin} from "@/pages/products-vendor/pages/beautyOfSkin/NewBeautyOfSkin.tsx";
import {NewMobileTablets} from "@/pages/products-vendor/pages/mobileTablets/NewMobileTablets.tsx";
import {NewNecklaces} from "@/pages/products-vendor/pages/necklaces/NewNecklaces.tsx";
import {NewClothing} from "@/pages/products-vendor/pages/clothing/NewClothing.tsx";
import {NewBluetooth} from "@/pages/products-vendor/pages/bluetooth/NewBluetooth.tsx";
import {NewFacialCare} from "@/pages/products-vendor/pages/facial/NewFacialCare.tsx";
import {NewShoes} from "@/pages/products-vendor/pages/shoes/NewShoes.tsx";
import {NewDiscoverSkincare} from "@/pages/products-vendor/pages/discover/NewDiscoverSkincare.tsx";
import {NewHeadphones} from "@/pages/products-vendor/pages/headphones/NewHeadphones.tsx";
import {NewBracelets} from "@/pages/products-vendor/pages/braceletes/NewBracelets.tsx";
import {NewEarrings} from "@/pages/products-vendor/pages/earrings/NewEarrings.tsx";
import {NewAwesomeLipCare} from "@/pages/products-vendor/pages/awesome/NewAwesomeLipCare.tsx";
import {NewBags} from "@/pages/products-vendor/pages/bags/NewBags.tsx";
import {NewCpu} from "@/pages/products-vendor/pages/cpu/NewCpu.tsx";
import {NewSmartWatch} from "@/pages/products-vendor/pages/smartWatch/NewSmartWatch.tsx";

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
  const user = useSelector(userDataSelector);

  const [stage, setStage] = useState(3);

  const {category, subcategory, product} = useParams();
  useCategoryRedirect(category as string, "/products-category-page", stage);

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
    React.createElement(COMPONENTS[category as string], { setStage, stage, formData, setFormData })
  );
};
