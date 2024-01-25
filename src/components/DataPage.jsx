import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CarsAssest from "./CardAssest";
import axios from "axios";

export default function DataPage() {
  const [fetchData, setFetchData] = useState([]);

  const { id } = useParams();

  const fetchAssesApi = async () => {
    const res = await axios.get(`https://api.coincap.io/v2/assets`);
    const data = await res.data;

    const correntObj = data.data.find((card) => {
      return card.rank === id;
    });

    setFetchData(correntObj);
  };

  useEffect(() => {
    fetchAssesApi();
  }, []);

  return (
    <div className="containerFsvorites">
      <h1>Blog Details </h1>
      {<CarsAssest assest={fetchData} dinamic={true} />}
    </div>
  );
}
