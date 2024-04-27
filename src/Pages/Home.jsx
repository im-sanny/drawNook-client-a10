import Banner from "../SubPages/Banner";
import CraftItems from "../SubPages/CraftItems";
import Features from "../SubPages/Features";
import Reviews from "../SubPages/Reviews";
import Timeline from "../SubPages/Timeline";

const Home = () => {
  return (
    <>
      {/* banner */}
      <div>
        <Banner></Banner>
      </div>

      {/*craft items */}
      <div>
        <CraftItems></CraftItems>
      </div>

      {/* feature */}
      <div>
        <Features></Features>
      </div>

      {/* timeline */}
      <div>
        <Timeline></Timeline>
      </div>

      {/* review */}
      <div>
        <Reviews></Reviews>
      </div>
    </>
  );
};

export default Home;
