import { createContext, useContext, useState } from "react";
import useLoading from "../hooks/useLoading";
import { uploadImage } from "../services/imageServices";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const UnitContent = createContext();

export const useUnit = () => useContext(UnitContent);

export const UnitProvider = ({ children }) => {
  const [unit, setUnit] = useState();
  const [loading, setLoading] = useLoading();

  useEffect(() => {
    const query = query(collection(db, "unit"));
    const shapShot = onSnapshot(
      query,
      (querySnapshot) => {
        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUnit(fetchedProducts);
      },
      () => {
        console.log("Youre not logged in yet");
      }
    );
    return () => shapShot();
  }, []);

  const addUnit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const imageFile = e.target.img.files[0];
    const imageUrl = await uploadImage(imageFile);
    if (imageUrl) {
      await addDoc(collection(db, "unit"), {
        nama_unit: e.target.nama_unit.value,
      });
      setLoading(false);
      navigate("/unit");
    } else {
      setLoading(false);
      navigate("/unit");
    }
  };
};
