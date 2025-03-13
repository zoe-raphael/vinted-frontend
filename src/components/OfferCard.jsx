import { Link } from "react-router-dom";

const OfferCard = ({ offer }) => {
  return (
    <Link to={`/offer/${offer._id}`} className="test">
      {offer.owner.account.avatar ? (
        <img src={offer.owner.account.avatar.secure_url} />
      ) : (
        ""
      )}
      <div>{offer.owner.account.username}</div>
      <img src={offer.product_pictures[0].secure_url} />
      {offer.product_details.map((detail, index) => {
        return <p key={index}>{detail.MARQUE}</p>;
      })}
      {offer.product_details.map((taille, index) => {
        return <p key={index}>{taille.TAILLE}</p>;
      })}
      <div>
        {offer.product_price} <span> €</span>
      </div>
    </Link>
  );
};

export default OfferCard;
