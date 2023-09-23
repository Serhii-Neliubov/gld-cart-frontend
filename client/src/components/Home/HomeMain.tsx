import Label from "./HomeElements/Label";
import ShopNow from "./HomeElements/ShopNow";
import Explore from "./HomeElements/Explore";
import Companies from "./HomeElements/Companies";
import BestSellings from "./HomeElements/BestSellings";
import Featured from "./HomeElements/Featured";
import Saved from "./HomeElements/Saved";
import Advantages from "./HomeElements/Advantages";
import SuperDiscount from "./HomeElements/SuperDiscount";

const HomeMain = () => {
  return (
    <main className="page">
      <Label />
      <ShopNow />
      <Companies />
      <Explore />
      <BestSellings />
      <SuperDiscount />
      <Featured />
      <Saved />
      <Advantages />
    </main>
  );
};

export default HomeMain;
