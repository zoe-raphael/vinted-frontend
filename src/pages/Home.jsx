import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import axios from "axios";
import OfferCard from "../components/OfferCard";

const Home = ({ title }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let filters = "";
        if (title) {
          filters += "?title=" + title;
        }
        // if (priceMin) {
        //   if (filters) {
        //     filters += "&priceMin=" + priceMin;
        //   } else {
        //     filters += "?priceMin=" + priceMin;
        //   }
        // }
        // if (priceMax) {
        //   if (filters) {
        //     filters += "&priceMax=" + priceMax;
        //   } else {
        //     filters += "?priceMax=" + priceMax;
        //   }
        // }

        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers${filters}`
        );
        // console.log(response.data); // un objet avec deux clefs : "count" et "offers"
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [title]);
  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <main>
      <Hero />
      <div className="container">
        {data.offers.map((offer) => {
          return <OfferCard offer={offer} key={offer._id} />;
        })}
      </div>
    </main>
  );
};

export default Home;
