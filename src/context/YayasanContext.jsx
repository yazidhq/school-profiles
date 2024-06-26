import { createContext, useContext, useEffect, useState } from "react";
import useLoading from "../hooks/useLoading";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const YayasanContext = createContext();

export const useYayasan = () => useContext(YayasanContext);

export const YayasanProvider = ({ children }) => {
  const [yayasan, setYayasan] = useState(null);
  const [loading, setLoading] = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "yayasan", "vQjcfDilElir4xyoKbSN");
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setYayasan({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error getting document:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setLoading]);

  const update = () => {};

  if (loading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <YayasanContext.Provider value={{ yayasan, update }}>
      {children}
    </YayasanContext.Provider>
  );
};
