import useCategoryRedirect from "@hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "@components/item-published/ItemPublishPage.tsx";
import {PhotoAndVideoBlock} from "../../components/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "./stages/BasicInformation.tsx";
import {SpecificationInformation} from "./stages/SpecificationInformation.tsx";
import {VendorProductComponentProps} from "@models/IVendorProductComponentProps.ts";

export const NewSnowRemoval = ({formData, stage, setFormData}: VendorProductComponentProps) => {
  useCategoryRedirect("snowRemoval", "/personal-services", stage);

  return (
    <>
      stage == 3 && <BasicInformation formData={formData} setFormData={setFormData}/>
      stage == 4 && <PhotoAndVideoBlock formData={formData} setFormData={setFormData}/>
      stage == 5 && <SpecificationInformation formData={formData} setFormData={setFormData}/>
      stage == 6 && <ItemPublishPage link='professional-services' formData={formData} category="Snow Removal" />
    </>
  );
};
