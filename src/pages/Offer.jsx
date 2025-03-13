import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers/" + params.id
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Chargement</p>
  ) : (
    <main>
      <div className="container offer-page">
        <img
          className="offer-image"
          src={data.product_image.secure_url}
          alt="apercu de la fringue"
        />
        <div>{data.product_name}</div>
        <button>Acheter</button>
      </div>
    </main>
  );
};

export default Offer;
