import Rating from "./Rating";

const style = {
  overflow: "auto",
  background: "linear-gradient(to right, #000000 0%, #0d01a4 100%)",
  color: "white",
  // padding: 25 + "px",
  marginBottom: 50 + "px",
  padding: "",
};

const Card = ({ name, level, additionalInfo, links, rating }) => {
  return (
    <div className="card">
      <div className="front">
        <h3>{name}</h3>
        <p>{level}</p>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default Card;
