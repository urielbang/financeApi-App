import { BsCurrencyBitcoin } from "react-icons/bs";
import { LuArrowDownToLine } from "react-icons/lu";

export default function CarsAssest(props) {
  return (
    <div className="card">
      <div>
        <BsCurrencyBitcoin />
      </div>
      <span>{props.assest.name}</span>
      <p>{props.assest.priceUsd}</p>
      <span>
        <LuArrowDownToLine />
        {props.assest.changePercent24Hr} per hour
      </span>
    </div>
  );
}
