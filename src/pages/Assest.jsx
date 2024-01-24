import axios from "axios";
import { useState, useEffect } from "react";
import CarsAssest from "../components/CardAssest";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { db } from "../firebase";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

export default function Assest() {
  const [assestData, setAssetData] = useState([]);

  const [currentUserdata, setCurrentUserData] = useState([]);

  const auth = getAuth();
  const user = auth.currentUser;

  const fetchAssesApi = async () => {
    const res = await axios.get(`https://api.coincap.io/v2/assets`);
    const data = await res.data;
    setAssetData(data.data);
  };

  //! set data currect card clicked
  const handleHeartClik = async (heart) => {
    if (user) {
      const collctionRef = collection(db, `favorites`);

      await addDoc(collctionRef, { ...heart, userId: user.uid });
    }
  };

  //! get data current user
  useEffect(() => {
    //!check if user log in
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);
        //!getData from fire base
        onSnapshot(
          collection(db, `${user.email}`),
          (snapshot) => {
            setCurrentUserData(
              snapshot.docs.map((doc) => {
                return doc.data();
              })
            );
          },
          []
        );
      }
    });
  }, []);

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
  }, []);
  return (
    <div className="containerCards">
      <h1>October 23</h1>
      {renderCards}
    </div>
  );
}
