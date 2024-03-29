import PropertyType from "../../types/property";
import House from "./house";
import "./card.css";
import Hotel from "./hotel";

export default function Property({ property }: { property: PropertyType }) {
  const footerText =
    "If a player owns all the sites of any colour group, the rent is doubled on unimproved sites in that group.";

  return (
    <div className="property card">
      <div className={`property-header ${property.group}`}>
        <p className="title-deed">Title Deed</p>
        <p className="property-name">{property.name}</p>
      </div>
      <div className="property-rent">rent {property.price}M</div>
      <div className="property-wh">
        {property.house.map((house, index) => {
          return (
            <House houseNumber={index + 1} key={index} houseAmount={house} />
          );
        })}
        <Hotel amount={property.hotel} />
      </div>
      <div className="mortgage-value">Mortgage Value Mph each</div>
      <div className="house-hotel-cost">
        <div className="houses-cost">
          Houses cost M{property.houseCost} each
        </div>
        <div className="hotel-cost">Hotel cost M{property.hotelCost} each</div>
      </div>
      <div className="property-footer">{footerText} each</div>
    </div>
  );
}
