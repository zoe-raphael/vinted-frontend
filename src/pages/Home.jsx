import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import axios from "axios";
import OfferCard from "../components/OfferCard";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
        );
        // console.log(response.data); // un objet avec deux clefs : "count" et "offers"
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <main>
      <Hero />
      <div className="container">
        {/* <Link to="/offer/1234567">Lien vers Offer</Link> */}
        {data.offers.map((offer) => {
          return <OfferCard offer={offer} key={offer._id} />;
        })}
      </div>
    </main>
  );
};

export default Home;
