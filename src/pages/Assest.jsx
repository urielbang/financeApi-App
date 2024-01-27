import axios from "axios";
import { useState, useEffect } from "react";
import CarsAssest from "../components/CardAssest";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Assest() {
  const currentDate = new Date();
  const currentMonthAndYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const [assestData, setAssetData] = useState([]);
  const [limit, setLimit] = useState(10);
  const auth = getAuth();
  const user = auth.currentUser;

  const fetchAssesApi = async () => {
    const res = await axios.get(
      `https://api.coincap.io/v2/assets?limit=${limit}`
    );
    const data = await res.data;
    console.log(data.data);
    setAssetData(data.data);
  };

  //! set data currect card clicked
  const handleHeartClik = async (heart) => {
    if (user) {
      const collctionRef = collection(db, `favorites`);

      await addDoc(collctionRef, { ...heart, userId: user.uid });
    }
  };
  const handleClick = () => {
    setLimit(limit + 10);
  };

  const renderCards = assestData.map((asset, index) => {
    return (
      <CarsAssest
        assest={asset}
        key={asset.id}
        id={index}
        handleHeartClik={handleHeartClik}
      />
    );
  });

  useEffect(() => {
    fetchAssesApi();
  }, [limit]);
  return (
    <>
      <div className="containerCards">
        <h1 className="headerDateAssest">{currentMonthAndYear}</h1>
        {renderCards}
      </div>
      <div className="containerBtnAssest">
        <button onClick={handleClick} className="button-68">
          Click for more
        </button>
      </div>
    </>
  );
}
