import CarsAssest from "../components/CardAssest";
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
        collection(db, `favorites`),
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
  }, [user]);

  const renderDataOfCorrentUser = currentUserData.filter((card) => {
    return card.userId === user.uid;
  });

  const renderCardsFavorites = renderDataOfCorrentUser.map((card, index) => {
    return <CarsAssest key={index} assest={card} ifButton={true} />;
  });

  return (
    <div className="containerFsvorites">
      <h1>Your Favorite</h1>

      {renderCardsFavorites}
    </div>
  );
}
