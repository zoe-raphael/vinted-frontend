import Hero from "../components/Hero";
import OfferCard from "../components/OfferCard";

const Home = ({ data }) => {
  const id = data.offers._id;
  return (
    <div>
      <Hero />
      {data.offers.map((offer) => {
        return <OfferCard offer={offer} key={offer._id} />;
      })}
    </div>
  );
};

export default Home;
