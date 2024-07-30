import { useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";

const useCategoryRedirect = (
  navCategory: string,
  navigate: string,
  stage: number
) => {
  const navigator = useNavigate();
  const {category} = useParams();

  useEffect(() => {
    if (category !== navCategory) {
      navigator(navigate);
    }
  }, [navCategory, category, navigate, navigator]);

  useEffect(() => {
    if (stage < 3) {
      navigator(navigate);
    }
  }, [navigate, navigator, stage]);
};

export default useCategoryRedirect;
