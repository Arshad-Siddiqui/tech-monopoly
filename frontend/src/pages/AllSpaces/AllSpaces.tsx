import Space from "../../components/Board/Space";
import Card from "../../types/card";
import "./allSpaces.css";

const AllSpaces = ({ cardData }: { cardData: Card[]}) => {
  return (
    <>
    <h1>All Spaces</h1>
    <div className="all-spaces">
      {cardData.map((card) => {
        return <Space card={card} key={card.name} />;
      })}
    </div>
    <footer className="navigation-footer">
      <a href="/">Home</a>
      <a href="/allProperties">All Properties</a>
    </footer>
    </>
  );
};

export default AllSpaces;
