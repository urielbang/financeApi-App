import { Link } from "react-router-dom";
import img from "../assets/imgFinance1.png";
import { IoIosArrowForward } from "react-icons/io";

export default function HomPage() {
  return (
    <div className="HomePage">
      <div className="cardMainHomePage">
        <div className="cardMainLeft">
          <p className="textHeaderMain">Let some</p>
          <p className="textHeaderMain">elegance into</p>
          <p className="textHeaderMain">Your finance</p>
          <p>
            Simplify Your financial journey with us. Join today and experience
            hassle-free banking.
          </p>
          <Link className="openAccoutn" to={"/auth"}>
            OPEN AN ACCOUNT
            <IoIosArrowForward className="iconArow" />
          </Link>
        </div>
        <div className="cardMainRight">
          <img src={img} alt="tfdf" />
        </div>
      </div>
    </div>
  );
}
