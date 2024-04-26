import Banner from "../SubPages/Banner";
import Reviews from "../SubPages/Reviews";

const Home = () => {
  return (
    <>
      {/* banner */}
      <div>
        <Banner></Banner>
      </div>
      {/* review */}
      <div>
        <Reviews></Reviews>
      </div>
    </>
  );
};

export default Home;
