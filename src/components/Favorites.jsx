import CarsAssest from "./CardAssest";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
export default function Favorites() {
  const [currentUserData, setCurrentUserData] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
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
  }, []);

  const renderCardsFavorites = currentUserData.map((card) => {
    return <CarsAssest key={card.rank} assest={card} />;
  });

  return (
    <div className="containerFsvorites">
      <h1>Your Favorite</h1>

      {renderCardsFavorites}
    </div>
  );
}
