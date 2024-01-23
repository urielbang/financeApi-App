import { BsCurrencyBitcoin } from "react-icons/bs";
import { LuArrowDownToLine } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";

export default function CarsAssest(props) {
  return (
    <div className="card">
      <div className="iconCard">
        <BsCurrencyBitcoin />
      </div>
      <span>{props.assest.name}</span>
      <p>{props.assest.priceUsd}</p>
      <span>
        <LuArrowDownToLine />
        {props.assest.changePercent24Hr} per hour
      </span>
      <GoHeart
        onClick={() => {
          props.handleHeartClik(props.assest);
        }}
      />
      <Link to={`/datas/${props.id}`}>read more</Link>
    </div>
  );
}
