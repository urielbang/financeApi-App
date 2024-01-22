import axios from "axios";
import { useState, useEffect } from "react";
import CarsAssest from "./CardAssest";

export default function Assest() {
  const [assestData, setAssetData] = useState([]);

  const fetchAssesApi = async () => {
    const res = await axios.get(`https://api.coincap.io/v2/assets`);
    const data = await res.data;
    setAssetData(data.data);
  };
  const renderCards = assestData.map((asset) => {
    return <CarsAssest assest={asset} />;
  });

  useEffect(() => {
    fetchAssesApi();
  }, []);
  return (
    <div className="containerCards">
      <h1>October 23</h1>
      {renderCards}
    </div>
  );
}
