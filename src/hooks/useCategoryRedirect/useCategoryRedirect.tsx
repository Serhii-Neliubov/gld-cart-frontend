import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { vendorProductInfo } from "@/store/slices/vendorProductInfoSlice.ts";

const useCategoryRedirect = (
  category: string,
  navigate: string,
  stage: number
) => {
  const navigator = useNavigate();
  const data = useSelector(vendorProductInfo);

  useEffect(() => {
    if (data.category !== category) {
      navigator(navigate);
    }
  }, [category, data, navigate, navigator]);

  useEffect(() => {
    if (stage < 3) {
      navigator(navigate);
    }
  }, [navigate, navigator, stage]);
};

export default useCategoryRedirect;
