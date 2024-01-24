import { BsCurrencyBitcoin } from "react-icons/bs";
import { LuArrowDownToLine } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import {
  getDocs,
  deleteDoc,
  collection,
  where,
  query,
} from "firebase/firestore";

//

export default function CarsAssest(props) {
  const handleDelete = async (propsObj) => {
    try {
      console.log(propsObj.userId);
      const q = query(
        collection(db, "favorites"),
        where("id", "==", propsObj.id),
        where("userId", "==", propsObj.userId)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      console.log("Document deleted successfully!");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };
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
      {props.ifButton ? (
        <button
          className="button-68"
          onClick={() => {
            handleDelete(props.assest);
          }}
        >
          Delete
        </button>
      ) : (
        false
      )}
    </div>
  );
}
